export default function () {
  const error = ref({})
  const hasErrors = computed(() => {
    return !!error.value.message || !!error.value.code
  })

  return {
    error,
    hasErrors
  }
}
