# About
It turns out composables can make dealing with authentication wonderful!

**firebase-composables** (Supports Vue2 and Vue3 thanks to [vue-demi](https://github.com/vueuse/vue-demi)) makes authenticating with firebase a joy, and also makes it easy to keep your firestore data in sync!

Here's an example of some signIn code...
```vue
<script setup>
import { useEmailSignIn, useAuthState } from 'firebase-composables'

const { form, signIn } = useEmailSignIn()
</script>

<template>
  <input v-model="form.email">
  <input v-model="form.password">
  <button @click="signIn">Sign In</button>
</template>
```
::: tip Note
We'll first have to setup our credentials before the above code will work!
:::

Pretty nice right? And this is just the beginning. It turns out there's other ways the composition api can make firebase an **absolute joy** to work with. [Let's get started!](/getting-started.html)