# Lab 3: EC (PSO)

## Particle swarm optimisation

### Objective

- develop a Python function to perform global best particle swarm optimisation

### Setup for Spyder

1. If you are using Spyder for this lab, go to <kbd>Tools</kbd> > <kbd>Preferences</kbd> > <kbd>IPython console</kbd> > <kbd>Graphics</kbd> and set <kbd>Backend</kbd> to <kbd>Automatic</kbd>.

2. Restart kernel by going to <kbd>Consoles</kbd> > <kbd>Restart kernel</kbd>.

### Problem to solve

Solve the following problem using global best particle swarm optimisation:

> Find the value of x to minimise the function f(x) = (x+100)(x+50)(x)(x-20)(x-60)(x-100) for -100 < x < 100

### Particle swarm optimisation

<v-app>
<v-timeline class="my-2" reverse>
<v-timeline-item right><v-flex slot="opposite"><a href='#initialise-particles'>particles initialisation</a></v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite"><a href='#update-personal-best'>personal best identification</a></v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite"><a href="#update-global-best">global best identification</a></v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite"><a href="#update-velocity">velocity calculation</a></v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite"><a href="#update-particle-position">position update</a></v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite"><a href="#create-a-loop-until-termination">repeat from personal best identification until termination</a></v-flex></v-timeline-item>
</v-timeline>
</v-app>

### Parameter definition

1. With global best particle swarm optimisaton, the position update function is given by

    > x<sub>i</sub>(t+1) = x<sub>i</sub>(t) + v<sub>i</sub>(t+1)

    and the velocity update function is

    > v<sub>i</sub>(t+1) = v<sub>i</sub>(t) + &alpha;<sub>1</sub>&nbsp;&beta;<sub>1</sub>(t)&nbsp;(&nbsp;p<sub>i</sub>(t) - x<sub>i</sub>(t)&nbsp;) + &alpha;<sub>2</sub>&nbsp;&beta;<sub>2</sub>(t)&nbsp;(&nbsp;p<sub>g</sub>(t) - x<sub>i</sub>(t)&nbsp;)

2. &alpha;<sub>1</sub> and &alpha;<sub>2</sub> are acceleration constants that are fixed throughout the algorithm. Define a small value for &alpha;<sub>1</sub> and &alpha;<sub>2</sub>, for example `0.1`.

    ```python
    alpha = [0.1, 0.1]
    ```

3. &beta;<sub>1</sub>(t) and &beta;<sub>2</sub>(t) are random values between `0` and `1` that are regenerated every iteration. Therefore no definition is required.

4. Also, define the number of particles to run the algorithm with.

    ```python
    n_particle = 10
    ```

5. Place the definition of these variables in the `__main__` block.

    ```python
    if __name__ == '__main__':
      alpha = [0.1, 0.1]
      n_particle = 10
    ```

### Create a class for particle

1. As each particle is an individual, create a `Particle` class to hold the data of the particle's current position, velocity, and personal best position.

    ```python
    class Particle:
      def __init__(self, position = 0, velocity = 0):
        self.position = position
        self.velocity = velocity
        self.best_position = position
    ```

### Fitness function

1. Fitness function is how we can compare different particles.

2. As our goal is to minimise f(x) as stated in the [beginning](#problem-to-solve), we will use f(x) as our fitness function.

3. By using f(x) in minimisation problem, it implies that the lower the value of f(x), the better the particle it is.

4. The value of x is the position of the particle.

5. Define the fitness function as a Python function.

    ```python
    def fit_fcn(position):
      ...
      return fitness
    ```

### Initialise particles

1. Particles are initialised with random positions within the constraints. 

2. At initialisation, we may assume that the initial velocities of all the particles. It is possible to initialise particles with non-zero velocities. For now, we will stick to zero initial velocities.

3. Define a Python function that takes the input of the number of particles and the limits of the positions to initialise and return a list of objects of class `Particle`. Each particle has random position within the limits and zero velocity.

    ```python
    def initialise_particles(n_ptc, position_limits):
      # position_limits is a list of two values. The first value is the lower boundary and the second value is the upper boundary.
      ...
      return particles
    ```

4. Remember to test your function before proceed.

### Update personal best

1. Create a method in the class `Particle` to update the `best_position` if necessary.

    ```python
    class Particle:
      def __init__(...):
        ...

      def update_personal_best(self):
        # 1. calculate the fitnesses of the best_position and the particle's current position
        # 2. compare the fitnesses and determine if the current position is better than the best_position
        # 3. update if necessary
        # 4. no return statement is required
    ```

2. If the new position has a lower fitness, i.e. the new position is better than the best position, update the `best_position` to hold the value of the new position.

### Update global best

1. Initiate a variable named `global_best_position` with the value `None` in the `__main__` block. 

2. Create a function that takes two positions as inputs, compare them, and return the better position of the two.

    ```python
    def compareFitness(pos1, pos2):
      # 1. calculate the fitness of pos1 and pos2
      # 2. compare to determine the better position
      return betterpos
    ```

3. We will later use this function to compare the current global best position with the personal best position of each particle.

### Update velocity

1. Create a method in the class `Particle` to update the velocity given &alpha;<sub>1</sub>, &alpha;<sub>2</sub>, &beta;<sub>1</sub>, &beta;<sub>2</sub>, and the global best position.

    ```python
    class Particle:
      def __init__(...):
        ...

      def update_personal_best(...):
        ...

      def update_velocity(self, alpha, beta, glob_best_pos):
        # alpha is a list of two values. we will access alpha_1 and alpha_2 by alpha[0] and alpha[1] respectively. This also applies to beta.
        # the current position, current velocity, and personal best position of the particle can be accessed by self.position, self.velocity, and self.best_position
        # assign the particle's velocity with the updated velocity
    ```

### Update particle position

1. As updating a particle position only require information from within the particle object and the limits of the position, create a method called `update_position` in the class `Particle` taking the input of the limits of the position.

    ```python
    class Particle:
      def __init__(...):
        ...

      def update_personal_best(...):
        ...

      def calc_velocity(...):
        ...

      def update_position(self, position_limits):
        self.position = self.position + self.velocity
        # how should you solve the problem of the position (x) going out of the limits
    ```

### Create a loop (until termination)

1. Consider the following termination criteria:
    - exceeding 200 iterations
    - fitnesses of all particles are close
    - positions of all particles are close

2. Create a function to calculate the average difference between the mean fitness and the fitness of each particle.

    ```python
    def calc_avg_fit_diff(particles):
      # 1. calculate mean fitness of all particles
      # 2. calculate the difference between the mean fitness and the fitness of each particle
      # 3. calculate the average of the differences obtained from step 2
      return avg_fit_diff
    ```

3. Create a function to calculate the average difference between the mean position and the position of each particle.

    ```python
    def calc_avg_pos_diff(particles):
      # 1. calculate mean position of all particles
      # 2. calculate the difference between the mean position and the position of each particle
      # 3. calculate the average of the differences obtained from step 2
      return avg_pos_diff
    ```

4. Create a loop (in the `__main__` block) to execute the global best particle swarm optimisation (gbest PSO) until termination. <span id="code-block-to-update"></span>

    ```python
    if __name__ == '__main__':
      # parameter initialisation
      alpha = [0.1, 0.1]
      n_particle = 10
      global_best_position = None
      position_limits = [-100, 100]
      # termination threshold
      iteration = 0
      max_iter = 200
      min_avg_fit_diff = 0.1
      min_avg_pos_diff = 0.1
      # initialise particles
      particles = initialise_particles(n_particle, position_limits)
      while (...): # how should you define the termination criteria here?
        print(iteration, [round(x.position,2) for x in particles])
        for particle in particles:
          # update personal best
          particle.update_personal_best()
          # update global best
          if global_best_position == None:
            global_best_position = particle.position
          else:
            global_best_position = compareFitness(global_best_position, particle.position)
        # generate beta randomly for current iteration
        beta = [random.random(), random.random()]
        for particle in particles:
          # update velocity
          particle.update_velocity(alpha, beta, global_best_position)
          # update position
          particle.update_position(position_limits)
        iteration += 1
      # display results
      print(iteration, [round(x.position,2) for x in particles])
    ```

### Visualisation

1. Let's add a few lines to visualise particles "flying" towards to optimal position.

    - import the visualisation library
      ```python
      import matplotlib.pyplot as plt
      ```
    
    - add the following lines just before the `while` loop in the [last code block in the previous section](#code-block-to-update).
      ```python
      space_ax = plt.axes()
      space_ax.plot(list(range(*position_limits)),[fit_fcn(x) for x in range(*position_limits)])
      space_ax.set_title("Position of particles in iteration {}".format(iteration))
      space_ax.set_xlabel("Position")
      space_ax.set_ylabel("Fitness")
      ```

    - add the following lines between line 14 and line 15 in the [last code block in the previous section](#code-block-to-update), as well as after line 29.
      ```python
      if len(space_ax.lines) > 1:
        del space_ax.lines[1]
      space_ax.plot([x.position for x in particles], [fit_fcn(x.position) for x in particles], 'go')
      space_ax.set_title("Position of particles in iteration {}".format(iteration))
      plt.pause(0.5) # pause the program for 0.5 second; if graph changes too quickly, increase this value; you can also speed up the process by decreasing this value
      ```

### Evaluation

1. Store the values of the variables at each iteration for analysis and evaluation.

    - position of each particle at each iteration (add the new line of code to the end of the methods)

      ```python
      class Particle:
        def __init__(...):
          ...
          self.position_list = [position]

        def update_position(...):
          ...
          self.position_list.append(self.position)
      ```

    - velocity of each particle at each iteration (add the new line of code to the end of the methods)

      ```python
      class Particle:
        def __init__(...):
          ...
          self.velocity_list = [velocity]

        def update_velocity(...):
          ...
          self.velocity_list.append(self.velocity)
      ```

    - personal best position of each particle at each iteration (add the new line of code to the end of the methods)

      ```python
      class Particle:
        def __init__(...):
          ...
          self.best_position_list = []

        def update_personal_best(...):
          ...
          self.best_position_list.append(self.best_position)
      ```

    - global best position at each iteration

      ```python
      if __init__ == '__main__':
        # parameter initialisation
        ...
        global_best_position_list = []
        ...
              global_best_position = ...
          global_best_position_list.append(global_best_position) # take note on the indentation
          # generate beta randomly for current iteration
          ...
      ```

3. Visualise the progression of these variables by adding the following code to the end of the `__main__` block.

    ```python
    [pos_fig, position_axes] = plt.subplots(4,1,sharex=True)
    position_axes[0].set_title("Position of each particle")
    position_axes[1].set_title("Fitness of each particle")
    position_axes[2].set_title("Boxplot of position at each iteration")
    position_axes[3].set_title("Boxplot of fitness at each iteration")
    position_axes[3].set_xlabel("Iteration")
    [vel_fig, velocity_axes] = plt.subplots(2,1,sharex=True)
    velocity_axes[0].set_title("Velocity of each particle")
    velocity_axes[1].set_title("Boxplot for velocity at each iteration")
    velocity_axes[1].set_xlabel("Iteration")
    [p_best_fig, personal_best_axes] = plt.subplots(4,1,sharex=True)
    personal_best_axes[0].set_title("Personal best position of each particle")
    personal_best_axes[1].set_title("Personal best fitness of each particle")
    personal_best_axes[2].set_title("Boxplot of personal best position at each iteration")
    personal_best_axes[3].set_title("Boxplot of personal best fitness at each iteration")
    personal_best_axes[3].set_xlabel("Iteration")
    [g_best_fig, global_best_axes] = plt.subplots(2,1,sharex=True)
    global_best_axes[0].set_title("Global best position")
    global_best_axes[1].set_title("Boxplot for global best position")
    global_best_axes[1].set_xlabel("Iteration")
    for particle in particles:
      iteration_list = list(range(len(particle.position_list)))
      position_axes[0].plot(iteration_list, particle.position_list, '-o')
      position_axes[1].plot(iteration_list, [fit_fcn(x) for x in particle.position_list], '-o')

      velocity_axes[0].plot(iteration_list, particle.velocity_list, '-o')

      personal_best_axes[0].plot(iteration_list[:-1], particle.best_position_list, '-o')
      personal_best_axes[1].plot(iteration_list[:-1], [fit_fcn(x) for x in particle.best_position_list], '-o')

    position_axes[2].boxplot([[p.position_list[i] for p in particles] for i in iteration_list], positions=iteration_list)
    position_axes[3].boxplot([[fit_fcn(p.position_list[i]) for p in particles] for i in iteration_list], positions=iteration_list)

    velocity_axes[1].boxplot([[p.velocity_list[i] for p in particles] for i in iteration_list], positions=iteration_list)

    personal_best_axes[2].boxplot([[p.best_position_list[i] for p in particles] for i in iteration_list[:-1]], positions=iteration_list[:-1])
    personal_best_axes[3].boxplot([[fit_fcn(p.best_position_list[i]) for p in particles] for i in iteration_list[:-1]], positions=iteration_list[:-1])

    global_best_axes[0].plot(iteration_list[:-1], global_best_position_list, '-o')
    global_best_axes[1].plot(iteration_list[:-1], [fit_fcn(x) for x in global_best_position_list], '-o')
    ```

### Exercise

1. Multiply the velocity memory, v<sub>i</sub>(t), with a value between 0 and 1, let's say 0.5. How does the process change? This is the effect of inertia weight.

2. Reduce the value of &alpha;<sub>1</sub> to 0.05 while maintaining &alpha;<sub>2</sub> at 0.1 and investigate the effect. 

3. Reduce the value of &alpha;<sub>1</sub> to 0. How does this affect the result?

4. Modify such that &alpha;<sub>1</sub> is larger than &alpha;<sub>2</sub>. What's the effect?

### Optional

1. How may you modify the formulae for particles with two variables, in which the fitness function is defined as f(x,y) = x<sup>2</sup> + y<sup>2</sup>? 