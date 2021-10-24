import firebaseAuth from 'services/firebase/firebaseAuth'
import handlesErrors from 'services/handlesErrors'

export default function (AuthProvider) {
  const { auth } = firebaseAuth()

  const loading = ref(false)

  const { error, hasErrors } = handlesErrors()

  const signIn = async () => {
    loading.value = true
    let response
    try {
      response = await auth.signInWithPopup(new AuthProvider())
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
    hasErrors
  }
}
