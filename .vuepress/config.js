module.exports = {
  title: "CI Labs",
  base: "/ci-labs/",
  head: [
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" }],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@mdi/font@3.x/css/materialdesignicons.min.css" }],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" }],
    // ["script", { src: "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js" }]
  ],
  themeConfig: {
    nav: [
      { text: 'AI', link: '/ai' },
      { text: 'CI', link: '/ci' },
    ],
    sidebarDepth: 2,
    sidebar: [
      '/',
      {
        title: '2019 August',
        collapsable: false,
        children: [
          '/lab1'
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
}