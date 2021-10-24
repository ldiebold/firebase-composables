import firebaseApp from 'firebase/app'
import useFirebaseAuthProvider from './useFirebaseAuthProvider'

export default function () {
  const { GithubAuthProvider } = firebaseApp.auth

  const githubAuthProvider = useFirebaseAuthProvider(GithubAuthProvider)

  return {
    ...githubAuthProvider
  }
}
