import { ref, computed } from 'vue-demi'
import { AuthError } from '@firebase/auth';

const errorDefault: AuthError = {
  code: null,
  message: null,
  name: null,
  customData: null
}

export default function () {
  const error = ref(errorDefault)

  const hasError = computed(() => {
    return !!error.value.message || !!error.value.code || !!error.value.name
  })

  function setErrorsFromAuthError(authError: AuthError) {
    error.value = authError
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
