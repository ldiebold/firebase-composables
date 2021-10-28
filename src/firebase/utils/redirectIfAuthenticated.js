import { getAuth } from 'firebase/auth'
import { useRouter } from 'vue-router'
import useAuthState from '../useAuthState'
import { ref } from 'vue-demi'

export default function redirectIfAuthenticated (path = '/') {
  const router = useRouter()
  const checking = ref(true)

  const {
    isAuthenticated
  } = useAuthState()

  const onChecked = ref(null)

  getAuth().onAuthStateChanged(user => {
    if (typeof onChecked.value === 'function') {
      onChecked.value(user)
    }
    if (isAuthenticated.value === true) {
      router.push(path)
    }
    checking.value = false
  })

  return {
    checking,
    onChecked
  }
}
