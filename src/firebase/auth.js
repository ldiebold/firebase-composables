import firebaseApp from 'firebase/app'
import 'firebase/auth'

export default function () {
  const app = inject('firebase')
  const firebaseAuth = firebaseApp.auth(app)

  return {
    auth: firebaseAuth
  }
}
