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
