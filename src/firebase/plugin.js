import firebaseApp from 'firebase/app'

export default {
  install: (vueApp, options) => {
    const app = firebaseApp.initializeApp(options)
    vueApp.provide('firebase', app)
  }
}
