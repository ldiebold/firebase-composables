import handlesErrors from '../handlesErrors'
import { getAuth } from 'firebase/auth'
import { ref, watch } from 'vue-demi'

export default function () {
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

  const signInWithEmailAndPassword = async () => {
    loading.value = true
    try {
      await getAuth().signInWithEmailAndPassword(
        form.value.email,
        form.value.password
      )
    } catch (err) {
      error.value = err
    }
    loading.value = false
  }

  return {
    form,
    signIn: signInWithEmailAndPassword,
    loading,
    error,
    hasErrors
  }
}
