
import { GoogleAuthProvider } from 'firebase/auth'
import useFirebaseAuthProvider from './useFirebaseAuthProvider'

export default function () {
  const googleAuthProvider = useFirebaseAuthProvider(new GoogleAuthProvider())

  return {
    ...googleAuthProvider
  }
}
