import firebaseApp from 'firebase/app'
import useFirebaseAuthProvider from './useFirebaseAuthProvider'

export default function () {
  const { FacebookAuthProvider } = firebaseApp.auth

  const facebookAuthProvider = useFirebaseAuthProvider(FacebookAuthProvider)

  return {
    ...facebookAuthProvider
  }
}
