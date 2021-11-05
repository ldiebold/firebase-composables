# Firestore
The firestore composable is **heavily** inspired by [@vueuse/firebase](https://vueuse.org/firebase/useFirestore/). It provides One-way synchronization with a firebase doc.

## Exposes
```js
return {
  data
}
```

## usages
Notice that we use `firebase/firebase`'s `collection` (works with `doc` too). `useFirestore` is an intentionally light wrapper, and its only purpose is to sync data with the server.

```vue
<script setup>
import { getFirestore, useFirestore } from 'firebase-composables'
import { collection } from 'firebase/firestore'

const db = getFirestore()
const postsCollection = collection(db, 'public-posts')

const posts = useFirestore(postsCollection)
</script>

<template>
  <pre>{{ posts }}</pre>
</template>
```

## One-way synchronization
In the above example, one might think updating `posts` on the frontend will update `posts` in firestore. **this is not the case**.

To create/update data, you will still need to use [firebase](https://firebase.google.com/docs/firestore/manage-data/add-data)

This is intentional, as sending an update request every time `posts` changes would be highly inefficient. Luckily, firebase makes it easy.

here is a full example with both `useFirestore` and firebases `addDoc`
```vue
<script setup>
import { getFirestore, useFirestore } from 'firebase-composables'
import { collection, addDoc } from 'firebase/firestore'
import { ref } from 'vue-demi'

// 🤿 Get the collection
const db = getFirestore()
const postsCollection = collection(db, 'public-posts')

// 🤿 Use the composable for one-way synchronization
const posts = useFirestore(postsCollection)

// 🤿 Setup a form for creating posts
const creating = ref(false)
const formDefault = {
  title: '',
  body: ''
}
const form = ref(formDefault)
function resetForm () {
  form.value = formDefault
}

// 🤿 Create a new post
async function createPost () {
  creating.value = true
  try {
    await addDoc(postsCollection, form.value)
    resetForm()
  } catch (error) {
    console.error(error)
  }
  creating.value = false
}
</script>

<template>
  <input v-model="form.title">
  <textarea v-model="form.body" />
  <button @click="createPost">create</button>

  <pre>{{ posts }}</pre>
</template>
```