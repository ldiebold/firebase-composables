import firebaseAuth from 'services/firebase/firebaseAuth'
import handlesErrors from '../handlesErrors'

export default function () {
  const loading = ref(false)
  const { auth } = firebaseAuth()

  const { error, hasErrors } = handlesErrors()

  const signOut = async () => {
    loading.value = true
    try {
      await auth.signOut()
    } catch (err) {
      error.value = err
    }
    loading.value = false
  }

  return {
    signOut,
    loading,
    error,
    hasErrors
  }
}
