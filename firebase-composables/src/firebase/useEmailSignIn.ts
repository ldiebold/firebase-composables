import handlesErrors from '../handlesErrors'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { AuthError } from '@firebase/auth'
import { ref, watch } from 'vue-demi'

export default function () {
  const loading = ref(false)

  const { error, hasError, setErrorsFromAuthError } = handlesErrors()

  const form = ref({
    email: '',
    password: ''
  })

  watch(form.value, () => {
    error.value = null
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
      if (typeof err === 'object' && err !== null && err.constructor.name === 'FirebaseError') {
        setErrorsFromAuthError(err as AuthError)
      }
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
