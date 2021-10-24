import firebaseAuth from 'services/firebase/firebaseAuth'
import handlesErrors from 'services/handlesErrors'

export default function () {
  const { auth } = firebaseAuth()

  const loading = ref(false)

  const { error, hasErrors } = handlesErrors()

  const form = ref({
    email: 'crazybuzz100@gmail.com',
    password: 'asdfasdf'
  })

  watch(form, newForm => {
    if (hasErrors.value) {
      error.value = {}
    }
  })

  const register = async () => {
    loading.value = true
    let response
    try {
      response = await auth.createUserWithEmailAndPassword(
        form.value.email,
        form.value.password
      )
    } catch (err) {
      error.value = err
    }
    loading.value = false

    return response
  }

  return {
    form,
    register,
    loading,
    error,
    hasErrors
  }
}
