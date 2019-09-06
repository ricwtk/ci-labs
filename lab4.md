---
circleradius: 10
---

# Lab 4: (ACO)

## Ant colony optimisation

### Objective

- to develop a Python function to perform ant colony optimisation on a problem

### Problem to solve

We will use ant colony optimisation to solve the Nick's route-finding problem in Romania. The problem is a route finding problem to identify the best (cheapest) route to travel from Arad to Bucharest.

The road map of Romania is provided as follows:

<svg viewBox="0 0 950 500">

<path d="M 75 125 L 100 75" stroke="black" />
<text :x="(75+100)/2" :y="(125+75)/2" text-anchor="end">75</text>
<path d="M 100 75 L 125 25" stroke="black" />
<text :x="(100+125)/2" :y="(75+25)/2" text-anchor="end">71</text>
<path d="M 125 25 L 265 175" stroke="black" />
<text :x="(125+265)/2" :y="(25+175)/2-10" text-anchor="start">151</text>
<path d="M 265 175 L 75 125" stroke="black" />
<text :x="(265+75)/2" :y="(175+125)/2+15" text-anchor="end">140</text>
<path d="M 75 125 L 85 280" stroke="black" />
<text :x="(75+85)/2-5" :y="(125+280)/2" text-anchor="end">118</text>
<path d="M 85 280 L 185 335" stroke="black" />
<text :x="(85+185)/2+5" :y="(280+335)/2-5" text-anchor="start">111</text>
<path d="M 185 335 L 190 390" stroke="black" />
<text :x="(185+190)/2+10" :y="(335+390)/2" text-anchor="start">70</text>
<path d="M 190 390 L 185 450" stroke="black" />
<text :x="(190+185)/2+10" :y="(390+450)/2" text-anchor="start">75</text>
<path d="M 185 450 L 350 465" stroke="black" />
<text :x="(185+350)/2" :y="(450+465)/2-10" text-anchor="end">120</text>
<path d="M 350 465 L 320 230" stroke="black" />
<text :x="(350+320)/2-10" :y="(465+230)/2" text-anchor="end">146</text>
<path d="M 320 230 L 265 175" stroke="black" />
<text :x="(320+265)/2+5" :y="(230+175)/2" text-anchor="start">80</text>
<path d="M 265 175 L 425 175" stroke="black" />
<text :x="(265+425)/2" :y="(175+175)/2-5" text-anchor="middle">99</text>
<path d="M 320 230 L 475 310" stroke="black" />
<text :x="(320+475)/2" :y="(230+310)/2-5" text-anchor="start">97</text>
<path d="M 475 310 L 350 465" stroke="black" />
<text :x="(475+350)/2-5" :y="(310+465)/2-5" text-anchor="end">138</text>
<path d="M 475 310 L 640 390" stroke="black" />
<text :x="(475+640)/2-10" :y="(310+390)/2+10" text-anchor="end">101</text>
<path d="M 425 175 L 640 390" stroke="black" />
<text :x="(425+640)/2+5" :y="(175+390)/2-5" text-anchor="start">211</text>
<path d="M 640 390 L 575 485" stroke="black" />
<text :x="(640+575)/2-5" :y="(390+485)/2" text-anchor="end">90</text>
<path d="M 640 390 L 745 340 " stroke="black" />
<text :x="(640+745)/2-5" :y="(390+340)/2" text-anchor="end">85</text>
<path d="M 745 340 L 875 340" stroke="black" />
<text :x="(745+875)/2" :y="(340+340)/2+15" text-anchor="middle">98</text>
<path d="M 875 340 L 935 440" stroke="black" />
<text :x="(875+935)/2-10" :y="(340+440)/2+5" text-anchor="end">86</text>
<path d="M 745 340 L 850 225" stroke="black" />
<text :x="(745+850)/2-5" :y="(340+225)/2-5" text-anchor="end">142</text>
<path d="M 850 225 L 760 120" stroke="black" />
<text :x="(850+760)/2+5" :y="(225+120)/2" text-anchor="start">92</text>
<path d="M 760 120 L 625 60" stroke="black" />
<text :x="(760+625)/2+5" :y="(120+60)/2-5" text-anchor="start">87</text>

<circle cx="75" cy="125" r="10" fill="green" />
<text x="60" y="130" text-anchor="end">Arad</text>
<circle cx="100" cy="75" r="10" fill="gray" />
<text x="85" y="75" text-anchor="end">Zerind</text>
<circle cx="125" cy="25" r="10" fill="gray" />
<text x="110" y="20" text-anchor="end">Oradea</text>
<circle cx="265" cy="175" r="10" fill="gray" />
<text x="265" y="160" text-anchor="start">Sibiu</text>
<circle cx="425" cy="175" r="10" fill="gray" />
<text x="440" y="180" text-anchor="start">Fagaras</text>
<circle cx="320" cy="230" r="10" fill="gray" />
<text x="305" y="235" text-anchor="end">Rimnicu Vilcea</text>
<circle cx="475" cy="310" r="10" fill="gray" />
<text x="460" y="320" text-anchor="end">Pitesti</text>
<circle cx="350" cy="465" r="10" fill="gray" />
<text x="340" y="480" text-anchor="end">Craiova</text>
<circle cx="185" cy="450" r="10" fill="gray" />
<text x="170" y="455" text-anchor="end">Drobeta</text>
<circle cx="190" cy="390" r="10" fill="gray" />
<text x="175" y="395" text-anchor="end">Mehadia</text>
<circle cx="185" cy="335" r="10" fill="gray" />
<text x="170" y="345" text-anchor="end">Lugoj</text>
<circle cx="85" cy="280" r="10" fill="gray" />
<text x="70" y="285" text-anchor="end">Timisoara</text>
<circle cx="640" cy="390" r="10" fill="red" />
<text x="625" y="400" text-anchor="end">Bucharest</text>
<circle cx="575" cy="485" r="10" fill="gray" />
<text x="560" y="490" text-anchor="end">Giurgiu</text>
<circle cx="745" cy="340" r="10" fill="gray" />
<text x="730" y="335" text-anchor="end">Urziceni</text>
<circle cx="875" cy="340" r="10" fill="gray" />
<text x="875" y="325" text-anchor="end">Hirsova</text>
<circle cx="935" cy="440" r="10" fill="gray" />
<text x="920" y="445" text-anchor="end">Eforie</text>
<circle cx="850" cy="225" r="10" fill="gray" />
<text x="835" y="230" text-anchor="end">Vaslui</text>
<circle cx="760" cy="120" r="10" fill="gray" />
<text x="745" y="135" text-anchor="end">Iasi</text>
<circle cx="625" cy="60" r="10" fill="gray" />
<text x="610" y="65" text-anchor="end">Neamt</text>

</svg>

```python
location_list = [ # [x,y,name]
  ['75', '125', 'Arad'],
  ['100', '75', 'Zerind'],
  ['125', '25', 'Oradea'],
  ['265', '175', 'Sibiu'],
  ['425', '175', 'Fagaras'],
  ['320', '230', 'Rimnicu Vilcea'],
  ['475', '310', 'Pitesti'],
  ['350', '465', 'Craiova'],
  ['185', '450', 'Drobeta'],
  ['190', '390', 'Mehadia'],
  ['185', '335', 'Lugoj'],
  ['85', '280', 'Timisoara'],
  ['640', '390', 'Bucharest'],
  ['575', '485', 'Giurgiu'],
  ['745', '340', 'Urziceni'],
  ['875', '340', 'Hirsova'],
  ['935', '440', 'Eforie'],
  ['850', '225', 'Vaslui'],
  ['760', '120', 'Iasi'],
  ['625', '60', 'Neamt']
]
```

```python
step_cost = [
  ['Arad', 'Zerind', 75],
  ['Zerind', 'Oradea', 71],
  ['Oradea', 'Sibiu', 151],
  ['Sibiu', 'Arad', 140],
  ['Sibiu', 'Fagaras', 99],
  ['Sibiu', 'Rimnicu Vilcea', 80],
  ['Fagaras', 'Bucharest', 211],
  ['Bucharest', 'Giurgiu', 90],
  ['Bucharest', 'Pitesti', 101],
  ['Pitesti', 'Rimnicu Vilcea', 97],
  ['Rimnicu Vilcea', 'Craiova', 146],
  ['Craiova', 'Pitesti', 138],
  ['Craiova', 'Drobeta', 120],
  ['Drobeta', 'Mehadia', 75],
  ['Mehadia', 'Lugoj', 70],
  ['Lugoj', 'Timisoara', 111],
  ['Arad', 'Timisoara', 118],
  ['Bucharest', 'Urziceni', 85],
  ['Urziceni', 'Vaslui', 142],
  ['Vaslui', 'Iasi', 92],
  ['Iasi', 'Neamt', 87],
  ['Urziceni', 'Hirsova', 98],
  ['Hirsova', 'Eforie', 86]
]
```

Consolidate the information of the connections into object of class `Town`.



