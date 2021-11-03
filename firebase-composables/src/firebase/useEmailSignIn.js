import handlesErrors from '../handlesErrors'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ref, watch } from 'vue-demi'

export default function () {
  const loading = ref(false)

  const { error, hasError } = handlesErrors()

  const form = ref({
    email: 'crazybuzz100@gmail.com',
    password: 'asdfasdf'
  })

  watch(form, newForm => {
    if (hasError.value) {
      error.value = {}
    }
  })

  const signIn = async () => {
    loading.value = true
    try {
      const auth = getAuth()

      await signInWithEmailAndPassword(
        auth,
        form.value.email,
        form.value.password
      )
    } catch (err) {
      error.value = err
    }
    loading.value = false
  }

  return {
    form,
    signIn,
    loading,
    error,
    hasError
  }
}
