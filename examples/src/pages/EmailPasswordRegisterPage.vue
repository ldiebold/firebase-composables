<script setup>
import { useEmailRegister, useAuthState } from 'firebase-composables'

const registerService = useEmailRegister()
registerService.form.value.name = 'Luke Diebold'
registerService.form.value.email = 'luke@coolio.com'
registerService.form.value.password = 'asd'

const authState = useAuthState()
</script>

<template>
  <form>
    <!-- Name -->
    <label for="text">Name</label>
    <input
      id="text"
      v-model="registerService.form.value.name"
      type="text"
    >

    <br>

    <!-- Email -->
    <label for="email">Email</label>
    <input
      id="email"
      v-model="registerService.form.value.email"
      type="email"
    >

    <br>

    <!-- Password -->
    <label for="password">Password</label>
    <input
      id="password"
      v-model="registerService.form.value.password"
      type="password"
    >

    <br>

    <!-- Register -->
    <button
      v-if="!registerService.loading.value"
      @click="registerService.register"
    >
      Register
    </button>
    <div v-else>
      Registering...
    </div>

    <br>

    <div
      v-if="registerService.hasError.value"
      style="color: red;"
    >
      {{ registerService.error.value.message }}
    </div>

    <pre>{{ authState }}</pre>
  </form>
</template>
