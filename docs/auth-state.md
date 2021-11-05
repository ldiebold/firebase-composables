# Auth State
Auth state was heavily inspired by [@vueuse/firebase](https://vueuse.org/firebase/useAuth/#useauth)

## Exposes
```js
return {
  isAuthenticated,
  user
}
```

## Usage
Not much to say here...

```vue
<script setup>
import { useAuthState } from 'firebase-composables'

const { isAuthenticated, user } = useAuthState()
</script>

<template>
  <pre>{{ isAuthenticated }}</pre>
  <pre>{{ user }}</pre>
</template>
```