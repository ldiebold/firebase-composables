import { useRouter } from 'vue-router'
import useAuthState from 'services/firebase/useAuthState'
import firebaseApp from 'firebase/app'

export default function redirectIfAuthenticated (path = '/') {
  const router = useRouter()
  const checking = ref(true)

  const {
    isAuthenticated
  } = useAuthState()

  const onChecked = ref(null)

  firebaseApp.auth().onAuthStateChanged(user => {
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
