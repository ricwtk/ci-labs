# Lab 3: EC (PSO)

## Particle swarm optimisation

### Objective

- develop a Python function to perform global best particle swarm optimisation

### Problem to solve

Solve the following problem using global best particle swarm optimisation:

> Find the value of x to minimise the function f(x) = (x+100)(x+50)(x)(x-20)(x-60)(x-100) for -150 < x < 150

### Particle swarm optimisation

<v-app>
<v-timeline class="my-2" reverse>
<v-timeline-item right><v-flex slot="opposite"><a href='#initialise-particles'>particles initialisation</a></v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite"><a href='#update-personal-best'>personal best identification</a></v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite"><a href="#update-global-best">global best identification</a></v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite"><a href="#calculate-velocity">velocity calculation</a></v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite"><a href="#update-particle-position">position update</a></v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite"><a href="#create-a-loop-until-termination">repeat from personal best identification until termination</a></v-flex></v-timeline-item>
</v-timeline>
</v-app>

### Parameter definition

1. With global best particle swarm optimisaton, the position update function is given by

    > x<sub>i</sub>(t+1) = x<sub>i</sub>(t)

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

3. Define a Python function that takes the input of the number of particles to initialise and return a list of objects of class `Particle`. Each particle has random position within the range of -150 < x < 150 and zero velocity.

    ```python
    def initialise_particles(n_ptc):
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

      def update_personal_best(self, new_position):
        # calculate the fitnesses of the best_position and the new_position
        # compare the fitnesses and determine if the new_position is better than the best_position
        # update if necessary
        # no return statement is required
    ```

2. If the fitness of the new position is lower, i.e. the new position is better than the best position, update the `best_position` to hold the value of the new position.

### Update global best

### Calculate velocity

### Update particle position

- constrain the range of `x`

### Create a loop (until termination)

### Evaluation

### Exercise
Modify the code to perform a local best particle swarm optimisation