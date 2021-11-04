# Email Password Registration

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

## Creating a register form
`useEmailSignIn` provides a form (`name`, `email`, `password`). The values in this form are used to register a new user when `signIn()` is called.

Here's a basic example of a firebase register form:
```vue
<script setup>
import { useEmailRegister, useAuthState } from 'firebase-composables'

// destructure form
const { form } = useEmailRegister()
</script>

<template>
  <form>
    <!-- Name -->
    <input
      v-model="form.name"
      type="text"
    >

    <!-- Email -->
    <input
      v-model="form.email"
      type="email"
    >

    <!-- Password -->
    <input
      v-model="form.password"
      type="password"
    >
  </form>
</template>
```

## The `register()` function
When the form is filled, we use `register` to create a new account in firebase:

```vue
<script setup>
import { useEmailRegister, useAuthState } from 'firebase-composables'

const { register } = useEmailRegister()
</script>

<template>
  <form>
    ...

    <!-- Register Button -->
    <button @click="register">
      Register
    </button>
  </form>
</template>
```

## Errors and Loading
We also have everything we need to handle errors, and loading state! Check it out...
```vue
<script setup>
import { useEmailRegister, useAuthState } from 'firebase-composables'

const {
  loading,
  register,
  hasError,
  error
} = useEmailRegister()
</script>

<template>
  <form>
    ...

    <!-- Register Button -->
    <button
      v-if="!loading"
      @click="register"
    >
      Register
    </button>
    <!-- loading -->
    <div v-else>
      Registering...
    </div>

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
Here's a "copy pastable" example to help get you started 🙂

```vue
<script setup>
import { useEmailRegister, useAuthState } from 'firebase-composables'

const {
  form,
  loading,
  register,
  hasError,
  error
} = useEmailRegister()

const authState = useAuthState()
</script>

<template>
  <form>
    <!-- Name -->
    <label for="text">Name</label>
    <input
      id="text"
      v-model="form.name"
      type="text"
    >

    <!-- Email -->
    <label for="email">Email</label>
    <input
      id="email"
      v-model="form.email"
      type="email"
    >

    <!-- Password -->
    <label for="password">Password</label>
    <input
      id="password"
      v-model="form.password"
      type="password"
    >

    <!-- Register -->
    <button
      v-if="!loading"
      @click="register"
    >
      Register
    </button>
    <div v-else>
      Registering...
    </div>

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

And that's it!
Need to do somthing more advanced? Be sure to read through the [Password Authentication](https://firebase.google.com/docs/auth/web/password-auth) page in the firebase docs.