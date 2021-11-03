import { ref, computed } from 'vue-demi'

const errorDefault = {
  code: null,
  mesage: null,
  name: null,
  customData: null
}

export default function () {
  const error = ref(errorDefault)

  const hasError = computed(() => {
    return !!error.value.message || !!error.value.code || !!error.value.name
  })

  function setErrorsFromAuthError (authError) {
    const { code, message, name, customData } = authError
    error.value = { code, message, name, customData }
  }

  function reset () {
    error.value = errorDefault
  }

  return {
    reset,
    setErrorsFromAuthError,
    error,
    hasError
  }
}
