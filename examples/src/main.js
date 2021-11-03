import { createApp } from 'vue'
import App from './App.vue'
import { firebasePlugin } from 'firebase-composables'
import router from './router/router'

const app = createApp(App)

app.use(router)

app.use(firebasePlugin, {
  config: {
    apiKey: 'AIzaSyD1R9dykDYOG-5gh7ZnrxnJRSJLRDJd7rE',
    authDomain: 'quasarv2-firebase.firebaseapp.com',
    projectId: 'quasarv2-firebase',
    storageBucket: 'quasarv2-firebase.appspot.com',
    messagingSenderId: '280746308042',
    appId: '1:280746308042:web:3f75f464f40a44c8e0df33',
    measurementId: 'G-YQWS8NXXE4'
  }
})

app.mount('#app')