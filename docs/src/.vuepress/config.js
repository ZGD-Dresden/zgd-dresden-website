const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'ZGD Dresden',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    searchPlaceholder: "Suchen...",
    lastUpdated: "Zuletzt aktualisiert",
    docsRepo: "https://github.com/ogerly",
    docsDir: "docs",
    editLinks: true,
    editLinkText: 'Diese Seite auf Github bearbeiten',
    displayAllHeaders: true,
    nav: [
      {
        text: '🧠ZGD',
        link: '/zgd',
      },
      {
        text: '🎯Leitfaden',
        link: '/guide/',
      },
      {
        text: '🕯️Mitmachen',
        link: '/join/'
      },
      {
        text: '🪙Wallet',
        link: 'https://gdd.gradido.net'
      }
    ],
    sidebar: {
      '/guide': 'true',
      '/contact': 'true',
      '/impress': 'true',
      '/gradido-academy': 'true',
      '/zgd': [
        {
          title: '',
          collapsable: false,
          children: [
              ['/zgd', '🧠ZGD'],
              ['/guide/', '🎯Leitfaden'],
              ['/join/', '🕯️Mitmachen']
          ]
        },
        {
          title: '',
          collapsable: false,
          sidebarDepth: 0,
          children: [
              ['https://gdd.gradido.net', '🪙Wallet']
          ]
        },
        {
          title: '📂Code',
          collapsable: false,
          children: [
            ['https://github.com/gradido/gradido', 'Gradido Software'],
            ['https://github.com/gradido/gradido/issues', 'Fehlermeldung']
          ]
        },
        {
          title: '',
          collapsable: false,
          children: [
            ['/gradido-academy','✨Gradido Academy']         
            //['/extras/contributing', 'Contributing ✨'],
            //['/extras/license', 'License 📚']
          ]
        },
        {
          title: '',
          collapsable: false,
          children: [
              ['/contact', 'Kontakt'],
              ['/impress', 'Impressum']
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
