import firebaseApp from 'firebase/app'
import useFirebaseAuthProvider from './useFirebaseAuthProvider'

export default function () {
  const { GoogleAuthProvider } = firebaseApp.auth

  const googleAuthProvider = useFirebaseAuthProvider(GoogleAuthProvider)

  return {
    ...googleAuthProvider
  }
}
