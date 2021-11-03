<script setup>
import { redirectIfUnauthenticated } from 'firebase-composables'

const redirector = redirectIfUnauthenticated('/')
redirector.onChecked.value = () => {
  console.log('redirecting to home')
}
</script>

<template>
  <div>
    If unauthenticated, this page will redirect to home...
  </div>
</template>
