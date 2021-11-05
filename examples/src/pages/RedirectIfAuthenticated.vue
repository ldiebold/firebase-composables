<script setup>
import { redirectIfAuthenticated } from 'firebase-composables'

const { onChecked } = redirectIfAuthenticated('/')

onChecked.value = () => {
  console.log('redirecting to home')
}
</script>

<template>
  <div>
    If authenticated, this page will redirect to home...
  </div>
</template>
