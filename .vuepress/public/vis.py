import numpy as np
def vis2d(ax, model, X_train, Y_train, X_test=[], Y_test=[]):
  # identify graph range
  x_range = [X_train[:,0].min()-0.5, X_train[:,0].max()+0.5]
  y_range = [X_train[:,1].min()-0.5, X_train[:,1].max()+0.5]
  # create a meshgrid
  xx, yy = np.meshgrid(np.arange(x_range[0], x_range[1], .01), np.arange(y_range[0], y_range[1], .01))
  # identify the area of decision
  Z = model.predict([[x,y] for x,y in zip(xx.ravel(), yy.ravel())])
  Z = Z.reshape(xx.shape)
  # plot the decision areas
  ax.contourf(xx,yy,Z,alpha=.8)
  # plot the training and testing data
  ax.scatter([x[0] for x in X_train], [x[1] for x in X_train], c=Y_train, edgecolors='black')
  if len(X_test) > 0:
    ax.scatter([x[0] for x in X_test], [x[1] for x in X_test], c=Y_test, edgecolors='black')
