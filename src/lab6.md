# Lab 6: ANN (Hyperplane)

## Artificial neural networks

### Objective
- to visualise the hyperplanes of a neural network configuration for better understanding

### Data preparation

We will use the iris data for the training in this lab.

```python
from sklearn import datasets
iris = datasets.load_iris()
```

We will start with using just two input features.
```python
X = [[d[1],d[2]] for d in iris.data]
names = [iris.target_names[1],iris.target_names[2]]
Y = iris.target
```

### Setup the first configuration for neural network

#### Data preprocessing
1. Training and testing sets split

    ```python
    from sklearn.model_selection import train_test_split
    X_train, X_test, y_train, y_test = train_test_split(X, Y, train_size=0.8)
    ```

2. Scale the input data based on the training input data

    ```python
    from sklearn.preprocessing import StandardScaler
    scaler = StandardScaler()
    scaler.fit(X_train)
    X_train = scaler.transform(X_train)
    X_test = scaler.transform(X_test)
    ```

#### Construct and train the ANN model
1. Construct the model

    ```python
    from sklearn.neural_network import MLPClassifier
    mlp = MLPClassifier(hidden_layer_sizes=(2), max_iter=1000)
    ```

2. Train the model

    ```python
    mlp.fit(X_train, y_train)
    ```

### Visualise the classification of a fitted model
#### Prepare the figure and axis
```python
import matplotlib.pyplot as plt
fig = plt.figure()
ax = fig.add_subplot(1,1,1)
```

#### Visualisation function
1. Download the [vis.py](../../files/vis.py) and save it to the same folder as your script.

2. Import all functions under the namespace of `vis`
  ```python
  import vis
  ```

#### Visualise the result
Use the following code to visualise the decision area of the model.
```python
vis.vis2d(ax, mlp, X_train, y_train, X_test, y_test)
```

### Setup the second, third, and more neural network configurations
We will investigate the effect of using different activation functions on the hyperplane.

The activation functions that are available for `MLPClassifier` are `identity`, `logistic`, `tanh`, and `relu` (default). They are explained in the [documentation](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPClassifier.html#sklearn.neural_network.MLPClassifier).

We can use a `for`-loop to construct and train the neural network model with different configurations. The same datasets from previous sections are used.

```python
activation_functions = ['identity', 'logistic', 'tanh', 'relu']
fig = plt.figure()
for i, actfcn in enumerate(activation_functions):
  mlp = MLPClassifier(hidden_layer_sizes=(3), activation=actfcn, max_iter=1000)
  mlp.fit(X_train, y_train)
  ax = fig.add_subplot(1, len(activation_functions), i+1)
  ax.set_title(actfcn)
  vis.vis2d(ax, mlp, X_train, y_train, X_test, y_test)
```

Apart from the activation functions, let's compare the results of having different number of hidden layers.

```python
activation_functions = ['identity', 'logistic', 'tanh', 'relu']
hidden_layers = [(3), (3,3), (3,3,3)]
fig = plt.figure()
for i,actfcn in enumerate(activation_functions):
  for j,hlyr in enumerate(hidden_layers):
    mlp = MLPClassifier(hidden_layer_sizes=hlyr, activation=actfcn, max_iter=1000)
    mlp.fit(X_train, y_train)
    ax = fig.add_subplot(len(hidden_layers), len(activation_functions), j*len(activation_functions)+i+1)
    ax.set_title('{},{},{}'.format(actfcn,str(hlyr),round(mlp.score(X_test,y_test),2)))
    vis.vis2d(ax, mlp, X_train, y_train, X_test, y_test)
    ax.set_xticks([])
    ax.set_yticks([])
```

`mlp.score(X_test, y_test)` gives the prediction accuracy of the model on `X_test` compared against `y_test`.

### Consider more input features

We will now use all the input features instead of two. To prepare the data,
```python
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, train_size=0.8)
scaler.fit(X_train)
X_train = scaler.transform(X_train)
X_test = scaler.transform(X_test)
```

### Construct and train the model
```python
mlp = MLPClassifier(hidden_layer_sizes=(3), max_iter=10000)
mlp.fit(X_train, y_train)
```

### Visualise decision area with more input features
We will be using parallel coordinates to display data with more than 2 input features. The following is not a complete parallel coordinates plot but a partial one.

```python
fig = plt.figure()
axes = vis.vis3d(fig, mlp, X_train, y_train, X_test, y_test)
for i,a in enumerate(axes):
  a.set_title(iris.target_names[i])
  a.set_xticklabels([])
  a.get_yaxis().set_visible(False)
axes[-1].set_xticklabels(iris.feature_names)
```

Is there other alternative to display data with more than 2 input features?

### Additional
There is a [tensorflow playground](https://playground.tensorflow.org/) which tries to visualise the training process of a neural network. It's similar to what we did in this lab.