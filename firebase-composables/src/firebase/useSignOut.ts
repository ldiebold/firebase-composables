import handlesErrors from '../handlesErrors'
import { getAuth, signOut as firebaseSignOut } from "firebase/auth"
import { ref } from 'vue-demi'
import { AuthError } from 'firebase/auth'

export default function () {
  const loading = ref(false)

  const { error, hasError, setErrorsFromAuthError } = handlesErrors()

  const signOut = async () => {
    loading.value = true
    try {
      const auth = getAuth()
      await firebaseSignOut(auth)
    } catch (err) {
      if (typeof err === 'object' && err !== null && err.constructor.name === 'FirebaseError') {
        setErrorsFromAuthError(err as AuthError)
      }
    }
    loading.value = false
  }

  return {
    signOut,
    loading,
    error,
    hasError
  }
}
