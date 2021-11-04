module.exports = {
  title: 'Firebase Composables',
  bundler: '@vuepress/bundler-vite',
  bundlerConfig: {

  },
  themeConfig: {
    navbar: [
      {
        text: 'GitHub',
        link: 'https://github.com/ldiebold/firebase-composables'
      }
    ],
    sidebar:
    [
      '/',
      '/getting-started',
      '/email-password-registration',
      '/email-password-sign-in',
      '/sign-out'
    ]
  },
  markdown: {
    code: {
      lineNumbers: false
    }
  }

}
