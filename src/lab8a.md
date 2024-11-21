# Lab 8a: ANN using Keras
## Image Classification Using Keras

We are using Tensorflow for this lab. Install it using: `pip install tensorflow`


The libraries used in this lab:
```python
import tensorflow as tf
from tensorflow.keras import layers, models
from sklearn.model_selection import train_test_split
import numpy as np
import matplotlib.pyplot as plt
```

This section will go through how to build and train a simple image classification model using Keras.

### Load and Preprocess Data

We’ll use the [CIFAR-10 dataset](https://keras.io/api/datasets/cifar10/), which is included in Keras. Load the dataset into the training and testing sets using the code below.

```python
(train_images, train_labels), (test_images, test_labels) = tf.keras.datasets.cifar10.load_data()
```

Normalize data by scaling pixel values to be between 0 and 1. There are several benefits to normalizing data, with the most important being that it prevents any specific range of values from dominating the learning process.

```python
train_images, test_images = train_images / 255.0, test_images / 255.0
```

Split the training data into training and validation sets.

```python
train_images, val_images, train_labels, val_labels = train_test_split(
    train_images, train_labels, test_size=0.2, random_state=42
)
```

Let's define label for data visualization. The class label is not used during training. It is simply a name that indicates what the class number represents.

```python
class_names = ['airplane', 'automobile', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck']
```

Plot some of the images to see how the data look like.

```python
plt.figure(figsize=(10, 10))
for i in range(9):
    ax = plt.subplot(3, 3, i + 1)
    plt.imshow(train_images[i])
    plt.title(class_names[train_labels[i][0]])
    plt.axis("off")
```

### Build the Model

We are building a 3-layers Convolutional Neural Network (CNN). A typical convolutional block had a convolutinal layer, activation function, pooling operator. 

The convolutional layer is responsible for feature extraction, while the associated activation function introduces non-linearity. The pooling layer reduces the spatial dimensions of the feature map.

The last layer is the output layer, with the number of neurons in the dense layer. In this case, there are 10 neurons. This is typically used for a classification task with 10 classes (e.g., digits 0-9 in digit classification). This layer converts the logits into probabilities. The Softmax function normalizes the output so that the sum of all probabilities is 1, making it easier to interpret the model's predictions.

```python
model = models.Sequential([
    # convolutional block 1
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)),
    layers.MaxPooling2D((2, 2)),
     # convolutional block 2
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    # reshape feature map to 1D
    layers.Flatten(),
    # fully-connected layer
    layers.Dense(64, activation='relu'),
    # output layer
    layers.Dense(10, activation='softmax')
])
```

### Train the Model

`model.compile` is used to configure the model for training.
  - The Adam optimizer is an adaptive learning rate optimization algorithm that’s widely used in training deep learning models. 
  - Sparse Categorical Crossentropy loss function is used for multi-class classification problems where the target labels are integers (not one-hot encoded). It measures the difference between the true labels and the predicted probabilities. logits is the model's output.
    - from_logits=True: This parameter indicates that the model’s output is not a probability distribution (i.e., the output layer does not use a softmax activation function).
  - Accuracy Metric specifies that the model's performance will be evaluated using accuracy, which is the proportion of correctly predicted instances out of the total instances. It's a common metric for classification tasks.

```python
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])
```

`model.fit` trains the model on the provided training data.
  - train_images: The input images for training.
  - train_labels: The corresponding labels for the training images.
  - epochs: The number of times the model will iterate over the entire training dataset. In this case, the model will train for 5 epochs.
  - validation_data=(test_images, test_labels): This tuple provides the validation data, which is used to evaluate the model's performance on unseen data after each epoch. It consists of:
    - test_images: The input images for validation.
    - test_labels: The corresponding labels for the validation images.
    - batch_size: The number of samples per gradient update. The training data will be divided into batches of 8 samples, and the model's weights will be updated after each batch.

```python
history = model.fit(train_images, train_labels, epochs=5, validation_data=(val_images, val_labels), batch_size=8)
```

### Evaluate the Model

`model.evaluate` evaluates the performance of the trained model on the test dataset.
  - test_images: The images from the test dataset.
  - test_labels: The corresponding labels for the test images.
  - verbose=2: This parameter controls the verbosity mode. A value of 2 means that the function will print one line per epoch.

```python
test_loss, test_acc = model.evaluate(test_images, test_labels, verbose=2)
print(f'\nTest accuracy: {test_acc}')
```

```python
plt.plot(history.history['accuracy'], label='accuracy')
plt.plot(history.history['val_accuracy'], label = 'val_accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.ylim([0, 1])
plt.legend(loc='lower right')
plt.show()
```

### Make Predictions

`model.predict(test_images)` takes the test images as input and outputs the predicted probabilities for each class.
  - predictions: This variable stores the predicted probabilities for each test image. Each element in predictions is an array of probabilities corresponding to the different classes.

```python
predictions = model.predict(test_images)
```

### Visualise Predictions


```python
pred_classes = np.argmax(predictions, axis=1)

fig, axes = plt.subplots(5, 5, figsize=(15,15))
axes = axes.ravel()

for i in np.arange(0, 25):
    axes[i].imshow(test_images[i])
    axes[i].set_title("Predict: %s \nTrue: %s" % (class_names[np.argmax(test_labels[i])], class_names[pred_classes[i]]))
    axes[i].axis('off')
    plt.subplots_adjust(wspace=1)
```