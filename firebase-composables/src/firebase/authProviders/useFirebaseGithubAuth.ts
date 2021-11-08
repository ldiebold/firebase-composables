import { GithubAuthProvider } from 'firebase/auth'
import useFirebaseAuthProvider from './useFirebaseAuthProvider'

export default function () {
  const githubAuthProvider = useFirebaseAuthProvider(new GithubAuthProvider())

  return {
    ...githubAuthProvider
  }
}
