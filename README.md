---
home: true
tagline: Computational Intelligence
timelineItem: [
  {
    title: 'Lab 1', link: './lab1', date: 'Week 1'
  }, { 
    title: 'Lab 2', link: './lab2', date: 'Week 2' 
  }, { 
    title: 'Lab 3', link: './lab3', date: 'Week 3' 
  }, { 
    title: 'Lab 4', link: './lab4', date: 'Week 4' 
  }, { 
    title: 'Lab 5', link: './lab5', date: 'Week 5' 
  }, { 
    title: 'Lab 6', link: './lab6', date: 'Week 6' 
  }, { 
    title: 'Lab 7', link: './lab7', date: 'Week 7' 
  }, { 
    title: 'Lab 8', link: './lab8', date: 'Week 9' 
  }, { 
    title: 'Lab 9', link: './lab9', date: 'Week 10' 
  }, { 
    title: 'Lab 10', link: './lab10', date: 'Week 11' 
  }, { 
    title: 'Lab 11', link: './lab11', date: 'Week 12' 
  }, { 
    title: 'Lab 12', link: './lab12', date: 'Week 13' 
  }, {
    title: 'Lab test', link: '', date: 'Week 14'
  }]
---

**This site hosts the lab sheets for the module of CSC3034 Computational Intelligence in the Department of Computing and Information Systems (DCIS) in Sunway University.**

## Aim

The aim of these labs is to guide the students to implement the basic computational intelligence (CI) algorithms with and/or without Python libraries.

## Information

The labs are designed to follow the schedule of the lectures, therefore you will require the knowledge of the previous lectures to be able to conduct the lab.

## Schedule 

*The schedule is subject to change.*
<v-app>
<v-timeline class="my-3">
<v-timeline-item v-for="x in $page.frontmatter.timelineItem" right>
<v-flex slot="opposite">{{ x.date }}</v-flex>
<v-chip :href="x.link">{{ x.title }}</v-chip>
</v-timeline-item>
</v-timeline>
</v-app>


----

<div style="min-height: 2ex"></div>

This site is created by [Richard Wong](https://ricwtk.github.io) with [Vuepress](https://vuepress.vuejs.org/) and [Vuetify](https://vuetifyjs.com/), both made possible by [Vue.js](https://vuejs.org/)