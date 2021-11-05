<script setup>
import { useAuthState } from 'firebase-composables'

const { isAuthenticated, user } = useAuthState()
</script>

<template>
  <pre>{{ isAuthenticated }}</pre>
  <pre>{{ user }}</pre>
</template>
