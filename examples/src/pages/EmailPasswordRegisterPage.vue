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

    <br>

    <!-- Email -->
    <label for="email">Email</label>
    <input
      id="email"
      v-model="form.email"
      type="email"
    >

    <br>

    <!-- Password -->
    <label for="password">Password</label>
    <input
      id="password"
      v-model="form.password"
      type="password"
    >

    <br>

    <!-- Register Button -->
    <button
      v-if="!loading"
      @click="register"
    >
      Register
    </button>
    <div v-else>
      Registering...
    </div>

    <br>

    <div
      v-if="hasError"
      style="color: red;"
    >
      {{ error.message }}
    </div>

    <pre>{{ authState }}</pre>
  </form>
</template>
