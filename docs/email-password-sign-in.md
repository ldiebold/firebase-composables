# Email Password Sign In
This is going to look very similar to the register form, and it should! Jump straight to 
## Enabling Password SignIn with Firebase
First, ensure that the "Email/Password" provider is enabled in firebase. Here's how you do it:
1. Wack this link to go to the firebase console 👊[firebase console](https://console.firebase.google.com/)
2. Select your project
3. Select **Authentication**
4. Select **Sign-in method**
5. Select **Add new provider**
6. Ensure **Email/Password** has a tick ✔️, otherwise, set it up

## Exposes
```js
return {
  form,
  signIn,
  loading,
  error,
  hasError
}
```
## Creating a SignIn form
```vue
<script setup>
import { useEmailSignIn } from 'firebase-composables'

const { form } = useEmailSignIn()
</script>

<template>
  <form>
    <input v-model="form.email" type="email">
    <input v-model="form.password" type="password">
  </form>
</template>
```

## The `signIn()` function
```vue
<script setup>
import { useEmailSignIn } from 'firebase-composables'

const { signIn } = useEmailSignIn()
</script>

<template>
  <form>
    ...
    <button @click="signIn">Sign In</button>
  </form>
</template>
```

## Errors and Loading
::: tip
Error handling will always look like this with firebase-composables. They use the `handlesErrors` composable behind the scenes!
:::

```vue
<script setup>
import { useEmailSignIn } from 'firebase-composables'

const {
  signIn,
  loading,
  error,
  hasError
} = useEmailSignIn()
</script>

<template>
  <form>
    ...
    <!-- Sign In -->
    <button
      v-if="!loading"
      :disabled="isAuthenticated"
      @click="signIn"
    >
      Sign In
    </button>
    <div v-else>
      Signing In...
    </div>

    <br>

    <div
      v-if="hasError"
      style="color: red;"
    >
      {{ error.message }}
    </div>
  </form>
</template>
```
## Full Example
Put it all together and what do you get?

Something like this:

```vue
<script setup>
import { useEmailSignIn, useAuthState } from 'firebase-composables'

const {
  form,
  signIn,
  loading,
  error,
  hasError
} = useEmailSignIn()

const authState = useAuthState()

const {
  isAuthenticated
} = authState
</script>

<template>
  <form>
    <!-- Email -->
    <label for="email">Email</label>
    <input
      id="email"
      v-model="form.email"
      type="email"
    >

    <br>

    <!-- Password -->
    <label for="password">Password</label>
    <input
      id="password"
      v-model="form.password"
      type="password"
    >

    <br>

    <!-- Sign In -->
    <button
      v-if="!loading"
      :disabled="isAuthenticated"
      @click="signIn"
    >
      Sign In
    </button>
    <div v-else>
      Signing In...
    </div>

    <br>

    <div
      v-if="hasError"
      style="color: red;"
    >
      {{ error.message }}
    </div>

    <pre>{{ authState }}</pre>
  </form>
</template>
```