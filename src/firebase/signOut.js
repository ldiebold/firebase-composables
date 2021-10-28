import handlesErrors from '../handlesErrors'
import { getAuth } from 'firebase/auth'
import { ref } from 'vue-demi'

export default function () {
  const loading = ref(false)

  const { error, hasErrors } = handlesErrors()

  const signOut = async () => {
    loading.value = true
    try {
      await getAuth().signOut()
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
