import { TwitterAuthProvider } from 'firebase/auth'
import useFirebaseAuthProvider from './useFirebaseAuthProvider'

export default function () {
  const twitterAuthProvider = useFirebaseAuthProvider(TwitterAuthProvider)

  return {
    ...twitterAuthProvider
  }
}
