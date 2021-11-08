import { ref, computed } from 'vue-demi'
import { AuthError } from '@firebase/auth';

const errorDefault: AuthError | null = null

export default function () {
  const error = ref(errorDefault)

  const hasError = computed(() => {
    if (error.value === null) {
      return false
    }
    return !!error.value.message || !!error.value.code || !!error.value.name
  })

  function setErrorsFromAuthError(authError: AuthError) {
    error.value = {
      code: authError.code,
      message: authError.message,
      name: authError.name,
      customData: authError.customData
    }
  }

  function reset() {
    error.value = errorDefault
  }

  return {
    reset,
    setErrorsFromAuthError,
    error,
    hasError
  }
}
