import { getAuth } from 'firebase/auth'
import { computed, ref } from 'vue-demi'
import useApp from './useApp'

export default function () {
  const app = useApp()

  const auth = getAuth(app)

  const user = ref(auth.currentUser)
  const isAuthenticated = computed(() => !!user.value)

  auth.onIdTokenChanged(authUser => {
    user.value = authUser
  })

  return {
    isAuthenticated,
    user
  }
}
