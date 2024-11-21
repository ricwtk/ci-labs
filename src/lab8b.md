# Lab 8b: ANN using Keras
## Text Classification Using Keras

By right you should have Tensorflow installed, if not run `pip install tensorflow`. Let's start by importing the required libraries.

```python
import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, LSTM, Dense, Dropout
from tensorflow.keras.datasets import imdb
from sklearn.model_selection import train_test_split
import numpy as np
```

### Load and Explore the Dataset

The IMDb dataset contains 50,000 movie reviews, split equally into training and test sets.

```python
# Load the IMDb dataset (only keep the top 10,000 most common words)
vocab_size = 10000
max_length = 100
(x_train, y_train), (x_test, y_test) = imdb.load_data(num_words=vocab_size)


# View a sample
print(f"First review (encoded): {x_train[0]}")
print(f"Label (0=negative, 1=positive): {y_train[0]}")
```

The data comes in encoded. We need to decode it see the original text.

```python
word_index = imdb.get_word_index()
reverse_word_index = {v: k for k, v in word_index.items()}

def decode_review(encoded_review):
    return " ".join([reverse_word_index.get(i - 3, "?") for i in encoded_review])

decoded_review = decode_review(x_train[0])
print(f"Review: {decoded_review}")
```

### Preprocess the Data

We need to pad or truncate reviews to a fixed length for consistent input size.

```python
x_train = pad_sequences(x_train, maxlen=max_length, padding='post', truncating='post')
x_test = pad_sequences(x_test, maxlen=max_length, padding='post', truncating='post')

padded_review = decode_review(x_train[0])
print(f"Review after padding: {padded_review}")
```

### Build the Model

We'll use an embedding layer to represent words as dense vectors, followed by an LSTM layer for sequence modeling.

```python
model = Sequential([
    Embedding(input_dim=vocab_size, output_dim=32, input_length=max_length),
    LSTM(64, return_sequences=False),
    Dropout(0.5),
    Dense(64, activation='relu'),
    Dense(1, activation='sigmoid')  # Binary classification (0 or 1)
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
```

### Train the Model

Train the model with the training dataset. We get the validation set using the parameter `validation_split`,  instead of doing it explicitly like in the Image Classification Lab. 

```python
history = model.fit(
    x_train, y_train,
    validation_split=0.2,
    epochs=5,
    batch_size=32,
    verbose=2
)
```

### Evaluate the Model

Evaluate the model's performance on the test set.

```python
test_loss, test_accuracy = model.evaluate(x_test, y_test, verbose=2)
print(f"Test Accuracy: {test_accuracy * 100:.2f}%")
```

### Visualize Training Results (optional)

```python
import matplotlib.pyplot as plt

# Plot accuracy
plt.plot(history.history['accuracy'], label='Training Accuracy')
plt.plot(history.history['val_accuracy'], label='Validation Accuracy')
plt.title('Accuracy over Epochs')
plt.xlabel('Epochs')
plt.ylabel('Accuracy')
plt.legend()
plt.show()

# Plot loss
plt.plot(history.history['loss'], label='Training Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.title('Loss over Epochs')
plt.xlabel('Epochs')
plt.ylabel('Loss')
plt.legend()
plt.show()
```

### Make Predictions

Use the trained model to predict sentiment for new text data.

```python
prediction = model.predict(x_test[:1])
print(f"Predicted Sentiment: {'Positive' if prediction[0][0] > 0.5 else 'Negative'}")
# look at the predicted text
decode_review(x_test[:1][0])
```
