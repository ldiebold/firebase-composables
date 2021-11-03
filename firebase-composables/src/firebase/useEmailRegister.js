import handlesErrors from '../handlesErrors'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { ref, watch } from 'vue-demi'

export default function () {
  const loading = ref(false)

  const {
    error,
    hasError,
    setErrorsFromAuthError,
    reset: resetErrors
  } = handlesErrors()

  const form = ref({
    email: '',
    password: ''
  })

  watch(form, newForm => {
    if (hasError.value) {
      error.value = {}
    }
  })

  const register = async () => {
    loading.value = true
    let response
    try {
      const auth = getAuth()
      response = await createUserWithEmailAndPassword(
        auth,
        form.value.email,
        form.value.password
      )

      resetErrors()
    } catch (authError) {
      setErrorsFromAuthError(authError)
    }
    loading.value = false

    return response
  }

  return {
    form,
    register,
    loading,
    error,
    hasError,
    setErrorsFromAuthError
  }
}
