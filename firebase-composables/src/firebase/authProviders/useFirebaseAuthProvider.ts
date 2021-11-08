import { getAuth, signInWithPopup, AuthProvider } from 'firebase/auth'
import handlesErrors from '../../handlesErrors'
import { AuthError } from '@firebase/auth'
import { ref } from 'vue-demi'

export default function (authProvider: AuthProvider) {
  const loading = ref(false)

  const { error, hasError, setErrorsFromAuthError } = handlesErrors()

  const signIn = async () => {
    loading.value = true
    let response
    try {
      response = await signInWithPopup(getAuth(), authProvider)
    } catch (error) {
      if (typeof error === 'object' && error !== null && error.constructor.name === 'FirebaseError') {
        setErrorsFromAuthError(error as AuthError)
      }
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
