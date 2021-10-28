// Social Auth Providers
import useFirebaseAuthProvider from './firebase/authProviders/useFirebaseAuthProvider'
import useFirebaseFacebookAuth from './firebase/authProviders/useFirebaseFacebookAuth'
import useFirebaseGithubAuth from './firebase/authProviders/useFirebaseGithubAuth'
import useFirebaseGoogleAuth from './firebase/authProviders/useFirebaseGoogleAuth'
import useFirebaseTwitterAuth from './firebase/authProviders/useFirebaseTwitterAuth'

// Auth
import signOut from './firebase/signOut'
import useAuthState from './firebase/useAuthState'
import useEmailRegister from './firebase/useEmailRegister'
import useEmailSignIn from './firebase/useEmailSignIn'

//
import firebasePlugin from './firebase/firebasePlugin'
import useApp from './firebase/useApp'
import redirectIfAuthenticated from './firebase/utils/redirectIfAuthenticated'
import redirectIfUnauthenticated from './firebase/utils/redirectIfUnauthenticated'

// Utilities
import handlesErrors from './handlesErrors'

// Firestore
import { useFirestore } from './firebase/firestore/useFirestore'
import getFirestore from './firebase/firestore/getFirestore'

export {
  getFirestore,
  useFirebaseAuthProvider,
  useFirebaseFacebookAuth,
  useFirebaseGithubAuth,
  useFirebaseGoogleAuth,
  useFirebaseTwitterAuth,
  firebasePlugin,
  useAuthState,
  signOut,
  useEmailRegister,
  useEmailSignIn,
  useApp,
  redirectIfAuthenticated,
  redirectIfUnauthenticated,
  handlesErrors,
  useFirestore
}
