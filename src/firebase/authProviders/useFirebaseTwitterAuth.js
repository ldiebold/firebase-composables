import firebaseApp from 'firebase/app'
import useFirebaseAuthProvider from './useFirebaseAuthProvider'

export default function () {
  const { TwitterAuthProvider } = firebaseApp.auth

  const twitterAuthProvider = useFirebaseAuthProvider(TwitterAuthProvider)

  return {
    ...twitterAuthProvider
  }
}
