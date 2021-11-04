module.exports = {
  bundler: '@vuepress/bundler-vite',
  bundlerConfig: {

  },
  themeConfig: {
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
