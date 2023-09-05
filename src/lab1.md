# Lab 1: Refresh on Python

## Amoeba community

1. Assuming a new amoeba takes one month to grow, and from the second month onwards, it takes one month to duplicate itself to create a new amoeba. Given that there is one new amoeba at the beginning of the first month, this is the progression of the number of amoeba in different months.

    - `Month 0`: 1 (new)
    - `Month 1`: 1 (grown)
    - `Month 2`: 1 (grown) + 1 (new) = 2
    - `Month 3`: 2 (grown) + 1 (new) = 3
    - `Month 4`: 3 (grown) + 2 (new) = 5
    - `Month 5`: 5 (grown) + 3 (new) = 8
    - `Month 6`: 8 (grown) + 5 (new) = 13
    - `Month 7`: 13 (grown) + 8 (new) = 21
    - ...

    !!! note "Hint"
        Note the pattern of the sequence

2. Write a function that takes the month number as input argument and provides the number of amoeba at the beginning of that month as output.

    ```python
    def numberofamoeba(month):
      ...
      return number_of_amoeba
    ```

3. Write a function to take the same input argument as `numberofamoeba` but instead of giving the number of amoeba at that month as output, provide the whole sequence of amoeba number starting from the beginning. For example, if `month` is `4`, the output of the function should be the list of `[1,1,2,3,5]`

    ```python
    def numberofamoebaseq(month):
      ...
      return number_seq
    ```

4. Create a scatter plot to plot the sequence of amoeba number from month 0 to month 100.

    !!! note "Hint"
        `import matplotlib.pyplot as plt` to use the Python visualisation library Matplotlib. Scatter plot can be produced with `plt.scatter(...)`.


## Fibonacci and Golden Ratio

1. The above sequence of number is also known as the Fibonacci sequence.

    !!! note "Note"
        A Fibonacci sequence may or may not include a 0 as the first element of the series, i.e. `0,1,1,2,3,5,8,...` instead of `1,1,2,3,5,8`.

2. Plot the ratio between every two consecutive numbers in the Fibonacci sequence. For Fibonacci sequence of `1,1,2,3,5,8,13,21`, plot the line of $\frac{1}{1}$, $\frac{2}{1}$, $\frac{3}{2}$, $\frac{5}{3}$, $\frac{8}{5}$, $\frac{13}{8}$, $\frac{21}{13}$.

    !!! note "Note"
        The longer the Fibonacci sequence you use, the closer is the value of the ratio between two consecutive numbers to be the golden ratio.


3. Generate a series of coordinates following the algorithm:
    1. Start from `(0,0)`.
    2. Get the next Fibonacci number, i.e. `1`.
    3. Add `(+1,+1)` to the previous point `(0,0)` to get `(1,1)`.
    4. Get the next Fibonacci number, i.e. `1`.
    5. Add `(+1,-1)` to the previous point `(1,1)` to get `(2,0)`.
    6. Get the next Fibonacci number, i.e. `2`.
    7. Add `(-2,-2)` to the previous point `(2,0)` to get `(0,-2)`.
    8. Get the next Fibonacci number, i.e. `3`.
    9. Add `(-3,+3)` to the previous point `(0,-2)` to get `(-3,1)`.
    10. Continue with the next Fibonacci number and update the coordinates with the sequence of the signs `(+,+), (+,-), (-,-), (-,+)`.


4. Create a line plot of the series of coordinates. If the lines are smoothen, it forms the golden spiral which can be found in pinecorns, seashells, and hurricanes.

## Random selection based on probability

For this section. assume the `random.random()` function selects the random number with even probability.

1. Consider a coin tossing event. If the probabilities of getting a head or a tail are even, i.e. 50%. Create a Python function which will simulate the coin tossing event and return the result as `head` or `tail`.

    ```python
    def tossCoin():
      ...
      return headOrTail
    ```

2. If the probabilities of getting a head or a tail are not even, with head as 20% and tail as 80%, how would you change the Python function you created previously to adapt to this coin?

3. Consider the event of selecting one option out of three options randomly. The probability of choosing option `A` is 20%, `B` is 50%, and  `C` is 30%. Create a Python function to simulate the random selection of the options.

    ```python
    def chooseFromThree():
      ...
      return selectedOption
    ```

<!-- ## Submission

Submit a Python file with the three functions: `fibonacci`, `tossCoin`, and `chooseFromThree`. -->