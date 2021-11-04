# Signing Out
the `useSignOut` composable has one method:
```js
signOut()
```
We can also handle errors and loading with `error`, `hasError` and `loading`

## Exposes
```js
return {
  signOut,
  loading,
  error,
  hasError
}
```

## Usage
```vue
<script setup>
import { useSignOut, useAuthState } from 'firebase-composables'

const {
  signOut,
  loading,
  error,
  hasError
} = useSignOut()
</script>

<template>
  <!-- Sign Out Button -->
  <button
    v-if="!loading"
    :disabled="!isAuthenticated"
    @click="signOut"
  >
    Sign Out
  </button>

  <!-- Loading -->
  <div v-else>
    loading
  </div>

  <!-- Error -->
  <div
    v-if="hasError"
    style="color: red;"
  >
    {{ error.message }}
  </div>
</template>
```