import { FacebookAuthProvider } from 'firebase/auth'
import useFirebaseAuthProvider from './useFirebaseAuthProvider'

export default function () {
  const facebookAuthProvider = useFirebaseAuthProvider(FacebookAuthProvider)

  return {
    ...facebookAuthProvider
  }
}
