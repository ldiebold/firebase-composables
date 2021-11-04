# Getting Started

## Install

```sh
# yarn (the cool kids)
yarn add firebase-composables

# or npm (the oldschoolers)
npm install firebase-composables --save
```

## Add Credentials
Here's how you can find your credentials:

1. Head over to the [firebase console](https://console.firebase.google.com/)
2. Select your project
3. At the top right of the page, next to **Project Overview**, click on the ⚙️ icon, then **Project settings**
4. scroll to the bottom of the page. Your credentials are inside `const firebaseConfig = `
5. have a cookie 🍪
> In the code snippet from step 4, firebase shows you how to initialize the app. You don't need any of this code, as **firebase-composables** handles it for you!

before we can use firebase-composables, we need to install the plugin. The file below will usually be `main.js`
```js
import { firebasePlugin } from 'firebase-composables'

const firebaseConfig = {
  apiKey: 'XXXXXXXXXXX',
  authDomain: 'XXXXXXXXXXX',
  projectId: 'XXXXXXXXXXX',
  storageBucket: 'XXXXXXXXXXX',
  messagingSenderId: 'XXXXXXXXXXX',
  appId: 'XXXXXXXXXXX',
  measurementId: 'XXXXXXXXXXX'
}

app.use(firebasePlugin, {
  config: firebaseConfig
})
```

## Email/Password SignIn

### Enabling SignIn with Firebase
First, ensure that the "Email/Password" provider is enabled in firebase. Here's how you do it:
1. Wack this link to go to the firebase console 👊[firebase console](https://console.firebase.google.com/)
2. Select your project
3. Select **Authentication**
4. Select **Sign-in method**
5. Select **Add new provider**
6. Ensure **Email/Password** has a tick ✔️, otherwise, set it up
7. Send a tweet to [someone on the Vue team](https://vuejs.org/v2/guide/team.html) to say thankyou 💚

### Using `useEmailSignIn`
Sign in is easy, let's dive into the code.
Hang on, grabbing my snorkel 🤿 

```vue
<script setup>
import { useEmailSignIn } from 'firebase-composables'

// 🤿 first we yank out the form, and sign in function
// from the composable.
const {
  form,
  signIn,
} = useEmailSignIn()
</script>

<template>
  <form>
    <!-- 🤿 Then, we simply model the 'email' and... -->
    <label for="email">Email</label>
    <input
      id="email"
      v-model="form.email"
      type="email"
    >
🐚
    <br>

    <!-- 🤿 The password. -->
    <label for="password">Password</label>
    <input
      id="password"
      v-model="form.password"
      type="password"
    >

    <br>🐟

    <!-- Then, we call the signIn button on click! -->
    <button @click="signIn">
      Sign In
    </button>

    <!-- Ahhhh!!! 🏊 🦈 -->
  </form>
</template>

```

And that's it.
