# Lab 5: ANN (Supervised learning)

## Artificial neural networks

### Objective

- to construct an multi-layer perceptron classifier using the scikit-learn Python library

### Load data to be learned

We will be constructing an artificial neural network and use it to perform prediction.

The data we will be using today is the results of a chemical analysis of wines grown in the same region in Italy but derived from three different cultivars.

The dataset is available from the scikit-learn library. Therefore we will first import the module.
```python
from sklearn import datasets
```

To load the data, 
```python
data = datasets.load_wine()
```

### Examine the dataset

We will use pandas to get more insight into the dataset. Import `pandas` and construct a data frame from the input and target values.

```python
import pandas as pd
wine = pd.DataFrame(data.data, columns=data.feature_names)
wine['target'] = data.target
```

The `describe` method of a data frame provides the statistical summary of the dataset.

```python
print(wine.describe().transpose())
```

### Split data into training and testing sets

scikit-learn library provides a function to split the data into training and testing sets easily. 

```python
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(data.data, data.target, train_size=0.8)
```

We will split the data into 80% training data and 20% testing data. The first argument will be split into the first two outputs, the second argument the second pair, and so on and so forth.

### Data preprocessing

From [Examine the dataset](#examine-the-dataset), notice that the range of different features are different. This will cause the training algorithm to be difficult to converge. 

Now we will use the method of standardisation to normalise the data. scikit-learn provides a built-in class to perform the standardisation, `StandardScaler`.

```python
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
```

We will scale the data based on the training data and then apply the scaler to both the training and testing data.

```python
scaler.fit(X_train)
X_train = scaler.transform(X_train)
X_test = scaler.transform(X_test)
```

Examine the training input data with the following code:

```python
print(pd.DataFrame(X_train, columns=data.feature_names).describe().transpose())
```

Compare this result with the one in [Examine the dataset](#examine-the-dataset). **How are these two datasets different from each other? What did the `StandardScaler` do to the dataset?**

### Construct the ANN model

As the target values are classes, i.e. `0`, `1`, or `2`, we need a classifier to perform the classification. 

```python
from sklearn.neural_network import MLPClassifier
```

We will construct a feedforward neural network with **1 hidden layer of 2 neuron** and **maximum iteration of 1000**.

```python
mlp = MLPClassifier(hidden_layer_sizes=(2), max_iter=1000)
```

### Train the model

The model can be trained using the `fit` method of the classifier. 

```python
mlp.fit(X_train, y_train)
```

### Predictions

The model is now trained. We can use the fitted (trained) model to predict the output of the testing data.

```python
predictions = mlp.predict(X_test)
```

### Evaluation

With the prediction results, we can evaluate the performance of the fitted model. scikit-learn library provides some built-in metrics such as confusion matrix and classification report.

```python
from sklearn.metrics import confusion_matrix, classification_report
```

confusion matrix
```python
print(confusion_matrix(y_test, predictions))
```

classification report
```python
print(classification_report(y_test, predictions))
```

**What information is provided by the confusion matrix and the classification report?**

### Parameters of the fitted model

The parameters of the fitted model (`mlp`) can be access through its public attributes:

| attributes | definition |
|------------|------------|
| `.coefs_`  | weight matrix |
| `.intercepts_` | bias (threshold) vector |
| `.n_iter_` | number of iterations the solver has ran |
| `.n_layers_` | number of layers |
| `.n_outputs_` | number of outputs |

### Visualisation the neural network

Copy the following code for the function `visualise` to the beginning of the script.

```python
import matplotlib.pyplot as plt

def visualise(mlp):
  # get number of neurons in each layer
  n_neurons = [len(layer) for layer in mlp.coefs_]
  n_neurons.append(mlp.n_outputs_)

  # calculate the coordinates of each neuron on the graph
  y_range = [0, max(n_neurons)]
  x_range = [0, len(n_neurons)]
  loc_neurons = [[[l, (n+1)*(y_range[1]/(layer+1))] for n in range(layer)] for l,layer in enumerate(n_neurons)]
  x_neurons = [x for layer in loc_neurons for x,y in layer]
  y_neurons = [y for layer in loc_neurons for x,y in layer]

  # identify the range of weights
  weight_range = [min([layer.min() for layer in mlp.coefs_]), max([layer.max() for layer in mlp.coefs_])]

  # prepare the figure
  fig = plt.figure()
  ax = fig.add_subplot(1,1,1)
  # draw the neurons
  ax.scatter(x_neurons, y_neurons, s=100, zorder=5)
  # draw the connections with line width corresponds to the weight of the connection
  for l,layer in enumerate(mlp.coefs_):
    for i,neuron in enumerate(layer):
      for j,w in enumerate(neuron):
        ax.plot([loc_neurons[l][i][0], loc_neurons[l+1][j][0]], [loc_neurons[l][i][1], loc_neurons[l+1][j][1]], 'white', linewidth=((w-weight_range[0])/(weight_range[1]-weight_range[0])*5+0.2)*1.2)
        ax.plot([loc_neurons[l][i][0], loc_neurons[l+1][j][0]], [loc_neurons[l][i][1], loc_neurons[l+1][j][1]], 'grey', linewidth=(w-weight_range[0])/(weight_range[1]-weight_range[0])*5+0.2)
```

To use this function to visualise the neural network, use the following line after the predictions.

```python
visualise(mlp)
```

### Compare the weights before and after the training

At initiation, the weights are not assigned. Therefore we need to train the model once before we can visualise the neural network. We can train the model once using the `.partial_fit` method. Put the following lines right after the initiation of `mlp`.

```python
mlp.partial_fit(X_train, y_train, np.unique(data.target))
visualise(mlp)
```

Compare the weights of the two visualisations.

### Effect of parameters

Investigate the effect of the following parameters on the performance of the neural network and the number of iterations to achieve convergence.

- number of hidden layers
- number of neurons in hidden layers
- splitting ratio of training and testing sets