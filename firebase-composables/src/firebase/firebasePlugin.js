import { initializeApp } from 'firebase/app'

export default {
  install: (vueApp, options) => {
    const app = initializeApp(options.config)
    vueApp.provide('firebase-app', app)
  }
}
