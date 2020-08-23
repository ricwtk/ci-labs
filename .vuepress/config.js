module.exports = {
  title: "CSC3034",
  base: "/ci-labs/",
  head: [
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" }],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@mdi/font@3.x/css/materialdesignicons.min.css" }],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" }],
    // ["script", { src: "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js" }]
  ],
  themeConfig: {
    nav: [
      { text: 'AI', link: 'https://ricwtk.github.io/ai-labs' },
      { text: 'CI', link: '/' },
    ],
    sidebarDepth: 2,
    sidebar: [
      '/',
      {
        title: '2019 August',
        collapsable: false,
        children: [
          '/lab1',
          // '/lab2',
          // '/lab3',
          // '/lab4',
          // '/lab5',
          // '/lab6',
          // '/lab7'
        ]
      },
      {
        title: 'Archive',
        collapsible: true,
        children: [
          {
            title: '2019 August',
            collapsable: true,
            children: [
              '/archive/201908/lab1',
              '/archive/201908/lab2',
              '/archive/201908/lab3',
              '/archive/201908/lab4',
              '/archive/201908/lab5',
              '/archive/201908/lab6',
              '/archive/201908/lab7'
            ]
          },
        ]
      },
    ],
    lastUpdated: 'Last Updated'
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
  ]
}