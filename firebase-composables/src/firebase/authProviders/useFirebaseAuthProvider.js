import { getAuth, signInWithPopup } from 'firebase/auth'
import handlesErrors from '../../handlesErrors'
import { ref } from 'vue-demi'

export default function (AuthProvider) {
  const loading = ref(false)

  const { error, hasError } = handlesErrors()

  const signIn = async () => {
    loading.value = true
    let response
    try {
      response = await signInWithPopup(getAuth(), new AuthProvider())
    } catch (err) {
      error.value = err
    }
    loading.value = false
    return response
  }

  return {
    signIn,
    loading,
    error,
    hasError
  }
}
