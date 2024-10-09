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

    The process will create a spiral in the following manner. The sequence of the signs produce the change in directions, and the fibonacci number provides the distance.
    <div style="text-align:center">
    <svg viewBox="-350 -250 600 500" style="width:50%;max-width:500px">
    <defs>
    <marker
    id="triangle"
    viewBox="0 0 10 10"
    refX="1"
    refY="5"
    markerUnits="strokeWidth"
    markerWidth="10"
    markerHeight="10"
    orient="auto">
    <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
    </marker>
    </defs>
    <text x="-10" y="00" text-anchor="end" dominant-baseline="hanging">(0,0)</text>
    <circle cx="0" cy="0" r="5" fill="black" />
    <path d="M 0 0 m 5 -5 l 85 -85" stroke="black" marker-end="url(#triangle)" />
    <text x="100" y="-110" text-anchor="middle" dominant-baseline="auto">(1,1)</text>
    <path d="M 0 0 m 100 -100 m 5 5 l 85 85" stroke="black" marker-end="url(#triangle)" />
    <text x="210" y="0" text-anchor="start" dominant-baseline="middle">(2,0)</text>
    <path d="M 0 0 m 100 -100 m 100 100 m -5 5 l -185 185" stroke="black" marker-end="url(#triangle)" />
    <text x="0" y="210" text-anchor="middle" dominant-baseline="hanging">(0,-2)</text>
    <path d="M 0 0 m 100 -100 m 100 100 m -200 200 m -5 -5 l -285 -285" stroke="black" marker-end="url(#triangle)" />
    <text x="-310" y="-100" text-anchor="end" dominant-baseline="middle">(-3,1)</text>
    <path d="M 0 0 m 100 -100 m 100 100 m -200 200 m -300 -300 m 5 -5 l 45 -45" stroke="black" stroke-dasharray="4" marker-end="url(#triangle)" />
    <!-- <path d="M 0 0 l 100 -100 l 100 100 l -200 200 l -300 -300" stroke="black" fill="transparent" /> -->
    </svg>
    </div>


4. Create a line plot of the series of coordinates. If the lines are smoothen, it would form the golden spiral which can be found in pinecorns, seashells, and hurricanes.

    !!! note "Additional"
        If you are interested in how we may plot arc to connect the points instead of using straight lines, you can refer to [Additional: plot arc to form golden spiral](#additional-plot-arc-to-form-golden-spiral).

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

## Additional: plot arc to form golden spiral

1. The golden spiral can be produced by drawing the arc connecting every consecutive coordinates.
    <div style="text-align:center">
    <svg viewBox="-350 -250 600 500" style="width:50%;max-width:500px">
    <defs>
    <marker
    id="triangle"
    viewBox="0 0 10 10"
    refX="1"
    refY="5"
    markerUnits="strokeWidth"
    markerWidth="10"
    markerHeight="10"
    orient="auto">
    <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
    </marker>
    </defs>
    <text x="-10" y="00" text-anchor="end" dominant-baseline="hanging">(0,0)</text>
    <circle cx="0" cy="0" r="5" fill="black" />
    <path d="M 0 0 m 5 -5 l 85 -85" stroke="black" marker-end="url(#triangle)" />
    <text x="100" y="-110" text-anchor="middle" dominant-baseline="auto">(1,1)</text>
    <path d="M 0 0 m 100 -100 m 5 5 l 85 85" stroke="black" marker-end="url(#triangle)" />
    <text x="210" y="0" text-anchor="start" dominant-baseline="middle">(2,0)</text>
    <path d="M 0 0 m 100 -100 m 100 100 m -5 5 l -185 185" stroke="black" marker-end="url(#triangle)" />
    <text x="0" y="210" text-anchor="middle" dominant-baseline="hanging">(0,-2)</text>
    <path d="M 0 0 m 100 -100 m 100 100 m -200 200 m -5 -5 l -285 -285" stroke="black" marker-end="url(#triangle)" />
    <text x="-310" y="-100" text-anchor="end" dominant-baseline="middle">(-3,1)</text>
    <path d="M 0 0 m 100 -100 m 100 100 m -200 200 m -300 -300 m 5 -5 l 45 -45" stroke="black" stroke-dasharray="4" marker-end="url(#triangle)" />
    <path d="M 0 0 A 100 100 0 0 1 100 -100" stroke="#B71C1C" fill="transparent"/>
    <path d="M 0 0 m 100 -100 A 100 100 0 0 1 200 0" stroke="#B71C1C" fill="transparent"/>
    <circle cx="100" cy="0" r="5" fill="#B71C1C" />
    <text x="100" y="10" text-anchor="middle" dominant-baseline="hanging">(1,0)</text>
    <path d="M 0 0 m 100 -100 m 100 100 A 200 200 0 0 1 0 200" stroke="#007517" fill="transparent"/>
    <circle cx="0" cy="0" r="5" fill="#007517" />
    <path d="M 0 0 m 100 -100 m 100 100 m -200 200 A 300 300 0 0 1 -300 -100" stroke="#0064eb" fill="transparent"/>
    <circle cx="0" cy="-100" r="5" fill="#0064eb" />
    <text x="0" y="-110" text-anchor="middle" dominant-baseline="auto">(1,0)</text>
    </svg>
    </div>

2. To draw the arc using `matplotlib` library, we need to identify the center of each arc. The arc and its corresponding center are colored with the same color in the previous figure. 
    ```python linenums="0"
    matplotlib.patches.Arc(
        xy, # center of the arc
        width, # length of horizontal axis, 
        height, # length of vertical axis, 
        angle, # rotation of the ellipse in degrees (counterclockwise)
        theta1, # starting angle of the arc in degrees
        theta2 # end angle of the arc in degrees
    )
    ```

3. The centers of every arc can be genrated from the sequence of coordinates using the following function:
    ```python title="function generatecenters"
    def generatecenters(coordinates):
        centers = []
        for i, coord in enumerate(coordinates):
            if i == 0: # add coordinate to list of center
            centers.append([coord[0], coord[1]])
            elif i == 1: # change x-coordinate of the first center
            centers[-1][0] = coord[0]
            else:
            centers.append([centers[-1][0], centers[-1][1]])
            if i % 2 == 0: # use y-coordinate as y for new center
                centers[-1][1] = coord[1]
            else: # use x-coordinate as x for new center
                centers[-1][0] = coord[0]
        return centers
    ```
    The `coordinates` is the list of coordinates generated from [Fibonacci and Golden Ratio](#fibonacci-and-golden-ratio) step 3.

4. The following function will then use the generated centers of the arc, and the Fibonacci sequence generated from `numberofamoebaseq` to draw the arc. The handler of the axis needs to be passed into the function as well.
    ```python title="function plotspiral"
    def plotspiral(axis, series, centers):
        angle = 90
        for number,center in zip(series,centers):
            arc = Arc(
                xy=center, 
                width=2*number, 
                height=2*number, 
                angle=angle,
                theta1=0, 
                theta2=90
            )
            axis.add_patch(arc)
            angle -= 90
    ```

    In your script, you will first generate the Fibonacci sequence, use the sequence to generate coordinates, generate centers of arcs, and plot the arcs to form the spiral.

    ```python
    n = 80
    number_seq = numberofamoebaseq(n)
    coordinates = generatecoordinatesfromseries(number_seq)
    centers = generatecenters(coordinates)
    plt.figure()
    plt.scatter(...) # or plt.plot(...) to plot the coordinates as in Fibonacci and Golden Ratio step 4
    plotspiral(plt.gca(), number_seq, centers) # plt.gca() returns handle of the current axis
    ```

    !!! note "Limitation"
        Due to the limitation of matplotlib, the spiral plotting only works for the Fibonacci sequence with length less than 93.