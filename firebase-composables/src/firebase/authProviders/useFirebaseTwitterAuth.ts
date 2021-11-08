import { TwitterAuthProvider } from 'firebase/auth'
import useFirebaseAuthProvider from './useFirebaseAuthProvider'

export default function () {
  const twitterAuthProvider = useFirebaseAuthProvider(new TwitterAuthProvider())

  return {
    ...twitterAuthProvider
  }
}
