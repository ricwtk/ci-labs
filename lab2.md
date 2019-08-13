# Lab 2: EC (GA)

## Binary-to-gray code conversion

Binary string is often used in the implementation of genetic algorithm. However, the downside of using a binary code is that the Hamming distance between two adjacent values is not consistent. This situation is solved by using a Gray code in place of a binary code.

1. `numpy` provides the function of [`binary_repr`](https://het.as.utexas.edu/HET/Software/Numpy/reference/generated/numpy.binary_repr.html) to convert a decimal value to its corresponding binary code.

2. Create a function to take the input of a binary code and return the correponding Gray code of the binary code. 

3. Create a function to calculate the Hamming distance between two binary strings (two binary codes or two Gray codes).

4. Consider a sequence of decimal values of `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. Convert the sequence to a series of binary codes. Identify and plot ([example of a line plot](https://matplotlib.org/3.1.1/gallery/lines_bars_and_markers/simple_plot.html#sphx-glr-gallery-lines-bars-and-markers-simple-plot-py)) the Hamming distances between the adjacent values.

5. Repeat the previous step with Gray codes instead of binary codes.

## Genetic algorithm

Consider the following problem: 

> You are given a sheet of paper with width `w` and height `h`. Your task is to cut the paper into squares of equal size. The aim of the task is to have as many squares as possible, and to have the area of each square as large as possible.

1. An optimisation problem can always be phrased in the form of

    > to optimise ... such that it maximises/minimises ...

    In this problem, what is the parameter to be optimised and what are the parameters to be maximised or minimised?

2. Let `x` denotes the length of the sides of a square. Design a fitness function such that higher fitness corresponds to larger number of squares and large area. If the number of squares (that can be cut out) is zero, or the area of the square is zero, the fitness will be zero.

<v-app>
<v-timeline class="my-2" reverse>
<v-timeline-item right><v-flex slot="opposite">feature encoding</v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite">population initialisation</v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite">fitness calculation</v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite">selection for mating</v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite">selection as parents</v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite">crossover</v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite">mutation</v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite">offspring (next generation population)</v-flex></v-timeline-item>
<v-timeline-item right><v-flex slot="opposite">repeat from fitness calculation until termination</v-flex></v-timeline-item>
</v-timeline>
</v-app>

Use the following template for the code development of the rest of this lab.

```python
def value2gray(value):
  # this function converts a decimal value to its gray code representation
  ...
  return gray

def gray2value(gray):
  # this function converts a gray code representation to its decimal value
  ...
  return value

def generatePopulation(population_size, population_min, population_max):
  # this function generate the first generation randomly based on the population size and the range of the value of each chromosome
  ...
  return population

def calculateFitness(value):
  # this function calculates the fitness of a chromosome from the decimal value of the chromosome
  ...
  return fitness

def roulettewheelSelection(chromosomes, n):
  # this function takes a list of chromosomes and select n number of chromosomes using roulette wheel selection
  ...
  return selected_chromosomes

def onepointCrossover(parents):
  # this function takes two parents and perform one-point crossover to produce two offsprings
  ...
  return offsprings

def mutation(chromosome, p_m):
  # this function takes a chromosome and perform uniform mutation using the mutation probability of p_m
  ...
  return mutated

if __name__ == "__main__":
  # main function
  ## initialise population
  ...
  while (<termination conditions>):
    ## calculate fitness
    ...
    ## select for mating
    ...
    ## select parent pairs
    ...
    ## perform crossover
    ...
    ## perform mutation
    ...
    ## update current population
    ...
```

### Feature encoding

1. 

### Population initialisation

1. A population is randomly generated according to the defined population size. 

### Fitness calculation

### Selection for mating

### Selection as parents

### Crossover

### Mutation

### Repeat until termination
