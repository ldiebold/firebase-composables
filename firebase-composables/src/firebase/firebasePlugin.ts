import { App } from 'vue-demi'
import { initializeApp, FirebaseOptions } from 'firebase/app'
import { FirebaseAppKey } from './types/symbols'

interface Options {
  config: FirebaseOptions
}

export default {
  install: (vueApp: App, options: Options) => {
    const app = initializeApp(options.config)
    vueApp.provide(FirebaseAppKey, app)
  }
}
