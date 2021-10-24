import { useAuth } from '@vueuse/firebase/useAuth'
import firebaseApp from 'firebase/app'

export default function () {
  const { isAuthenticated, user } = useAuth(firebaseApp.auth)
  return {
    isAuthenticated,
    user
  }
}
