# Guarding routes
::: warning
both `redirectIfAuthenticated` and `redirectIfUnauthenticated` require [vue-router v4](https://next.router.vuejs.org/)
:::
firebase-composables offers a simple way to **redirect** if the user is authenticated. You may want to use them in your apps layout.

## Exposes
`redirectIfUnauthenticated` and `redirectIfAuthenticated` expose the same thing:
```js
return {
  checking,
  onChecked
}
```

## Usage
```js
<script setup>
import { redirectIfUnauthenticated } from 'firebase-composables'

const { onChecked } = redirectIfUnauthenticated('/')

onChecked.value = () => {
  console.log('redirecting to home')
}
</script>

<template>
  <YourLayoutComponent>
    <router-view />
  </YourLayoutComponent>
</template>
```

::: warning
Be careful where you place these `redirect` composables! They're usually best placed high up the component tree (e.g. layout) so as to prevent unecessary repeated checks.
:::

## Full Example
Here's a simple way of handling redirects for authenticated users using layouts. Note that this will handle most use cases, but you may need a different strategy for something more custom.

1. Create a "public" layout

`PublicLayout.vue`
```vue
<script setup>
import { redirectIfAuthenticated } from 'firebase-composables'

// 🤿 If the user is already authenticated, send them to the apps dashboard
redirectIfAuthenticated('/dashboard')
</script>

<template>
  <div>
    <router-view />
  </div>
</template>
```

This layout might be used for a "register page" or a "landing page". Pages that an **unauthenticated** user can visit, and that an **authenticated** user would not.

2. Create an "auth only" layout

`AuthOnlyLayout.vue` (this might end up being called something like `MainLayout.vue`)
```vue
<script setup>
import { redirectIfAuthenticated } from 'firebase-composables'

// 🤿 If the user is NOT authenticated, send them to the login page
redirectIfUnauthenticated('/login')
</script>

<template>
  <div>
    <router-view />
  </div>
</template>
```

Now you can:
- use `AuthOnlyLayout.vue` for routes only visible to authenticated users
- use `PublicLayout.vue` for routes only visible to unauthenticated users