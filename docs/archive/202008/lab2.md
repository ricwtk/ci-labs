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

<div class="timeline">
<div class="container right"><div class="content"><a href='#feature-encoding'>feature encoding</a></div></div>
<div class="container right"><div class="content"><a href='#population-initialisation'>population initialisation</a></div></div>
<div class="container right"><div class="content"><a href="#selection-as-parents">selection as parents</a></div></div>
<div class="container right"><div class="content"><a href="#crossover">crossover</a></div></div>
<div class="container right"><div class="content"><a href="#mutation">mutation</a></div></div>
<div class="container right"><div class="content"><a href="#">offspring (next generation population)</a></div></div>
<div class="container right"><div class="content"><a href="#repeat-until-termination">repeat from fitnexx calculation until termination</a></div></div>
</div>

<!-- Use the following template for the code development of the rest of this lab.

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
``` -->

### Feature encoding

1. In this problem as we only have one feature, i.e. the side length of the square, each chromosome consists of the value of the side length of the square. We will encode the chromosome in the form of Gray code. 

2. Create two functions `value2gray` and `gray2value` to convert a decimal value to its Gray code and vice versa.

    ```python
    def value2gray(value):
      # this function converts a decimal value to its gray code representation
      ...
      return gray

    def gray2value(gray):
      # this function converts a gray code representation to its decimal value
      ...
      return value
    ```

3. Add the following code snippet to the end of the code to test your functions.

    ```python
    if __name__ == "__main__":
      print(value2gray(10))
      print(gray2value("1001"))
    ```

    After running the file as a script, you should see the following output.

    ```
    1111
    14
    ```

### Population initialisation

1. A population is randomly generated according to the defined population size. 

2. Create a function to generate randomly a population of size `pop_size` with each value lies between the range of `pop_min` to `pop_max`.

    ```python
    def generatePopulation(pop_size, pop_min, pop_max):
      # this function generate the first generation randomly based on the population size and the range of the value of each chromosome
      ...
      return population
    ```

    This function and all the functions created after this should be placed before the `if __name__ == "__main__":` code block.

3. [Optional testing] You can test the function by changing the `__main__` code block to 

    ```python
    if __name__ == "__main__":
      print(generatePopulation(8, 0, 10))
    ```

    The printed output should be a series of 8 chromosomes displayed as decimal values.

### Fitness calculation

1. The fitness function was designed at the beginning of [this section](#genetic-algorithm). Define a function that takes the input of a chromosome (as decimal value) and returns the fitness of the chromosome.

    ```python
    def calculateFitness(value):
      # this function calculates the fitness of a chromosome from the decimal value of the chromosome
      ...
      return fitness
    ```
2. [Optional] Test the function with

    ```python
    if __name__ == "__main__":
      print(calculateFitness(5))
    ```

    The printed output should be the fitness of a chromosome of value 5, which would be a decimal value larger than zero.

<!-- ### Selection for mating

1. In genetic algorithm, the common practice is to generate the same number of offspring as the number of parents. 

2. We will first identify if a chromosome is able to mate/crossover with other chromosomes. This is determined by the crossover probability `p_crossover`.

3. Define a function that takes a list of chromosomes and the crossover probability `p_crossover` (in the range of 0 and 1) as inputs and returns a list of boolean values of which `0` represents unable to crossover and `1` as able to crossover.

    ```python
    def canItCrossover(chromosomes, p_crossover):
      # this function takes the inputs of a list of chromosomes and crossover probability and returns a list of boolean values to represent the ability to crossover
      ...
      return can_crossover
    ```

4. [Optional] Test the function with

    ```python
    if __name__ == "__main__":
      print(canItCrossover([8, 12, 6, 13], 0.78))
    ```

    The printed output should be a series of `0` and/or `1` which denotes the ability of each chromosome to crossover, for example, `[0, 1, 1, 1]`. -->

### Selection as parents

1. From the list of the chromosomes, we will select the chromosome pairs as parents. As we will be using one-point crossover, each pair of parents will produce exactly two offsprings. Therefore for population size of `pop_size`, we need `pop_size/2` pairs of parents.

2. Define a function that takes the inputs of the current population and the total number of chromosomes in current population, and returns the chromosome pairs which will act as parents. The selection process is performed with the roulette wheel selection. The same chromosome can be selected more than once.

    ```python
    def selectParents(chromosomes, pop_size):
      ...
      return parent_pairs
    ```

3. [Optional] Test the function with

    ```python
    if __name__ == "__main__":
      print(selectParents([13, 8, 14, 7], 6))
    ```

    The printed output should be 3 parent pairs, for example, 
    
    ```
    [[13, 8], [8, 14], [13, 7]]
    ```

### Crossover

1. Define a function that takes a parent pair and returns a pair of offspring after performing one-point crossover.

    ```python
    def crossover(parents):
      # this function takes a parent pair and perform one-point crossover to produce a pair of offspring
      ...
      return offsprings
    ```

2. [Optional] Test the function with

    ```python
    if __name__ == "__main__":
      print(crossover([13, 9]))
    ```

    The printed output should be a pair of offsprings, for example,

    ```
    [10, 14]
    ```

    *`13` is `1011` and `9` is `1101` in Gray code, the offsprings `10` is `1111` and `14` is `1001` in Gray code.*

### Mutation

1. Each gene in all chromosomes has the same mutation probability `p_mutation`. 

2. Define a function that takes a chromosome and the mutation probability `p_mutation` as the inputs, and returns the mutated chromosome. 

    ```python
    def mutate(chromosome, p_mutation):
      # this function mutates each gene of a chromosome based on the mutation probability
      ...
      return mutated
    ```
3. [Optional] Test the function with

    ```python
    if __name__ == "__main__":
      print(mutate(15, 0.1))
    ```

    The printed output should be the mutated or unmutated chromosome, for example, `14`.

    *`15` is `1000` and `14` is `1001` in Gray code. In the example output, the last bit is mutated.*


### Repeat until termination

1. The common termination criteria are the maximum number of iterations and the distance among the fitnesses of the chromosomes of the latest population.

2. Define a function that calculates one metric to measure the distance among the fitnesses of the chromosomes, i.e. how far the fitnesses of all the chromosomes are from each other.

    ```python
    def findOverallDistance(chromosomes):
      # this function takes the input of the current population and returns the overall distance among fitnesses of all chromosomes
      ...
      return overall_distance
    ```

3. [Optional] Test the function with

    ```python
    if __name__ == "__main__":
      print(findOverallDistance([13, 11, 14, 7]))
    ```

    The printed output should be a decimal value that represents the overall distance of fitnesses.

### Combining all functions

1. The functions we have created can be combined with the following code snippet to execute the genetic algorithm to solve the problem defined at the beginning of [this section](#genetic-algorithm). Consider the width and the height of the sheet of paper to be `20cm` and `15cm`.

    ```python
    if __name__ == "__main__":
      # main function
      ## parameter definition
      pop_size = 10
      pop_min = 1 #1cm
      pop_max = 10 #10cm
      curr_iter = 0
      max_iter = 100
      min_overalldistance = 0.5
      p_mutation = 0.05
      ## initialise population
      population = []
      population.append(generatePopulation(pop_size, pop_min, pop_max))
      while (curr_iter < max_iter and findOverallDistance(population[-1]) > min_overalldistance):
        curr_iter += 1
        ## select parent pairs
        parents = selectParents(population[-1], len(population[-1]))
        ## perform crossover
        offsprings = []
        for p in parents:
          new_offsprings = crossover(p)
          for o in new_offsprings:
            offsprings.append(o)
        ## perform mutation
        mutated = [mutate(offspring, p_mutation) for offspring in offsprings]
        ## update current population
        population.append(mutated)
    ```