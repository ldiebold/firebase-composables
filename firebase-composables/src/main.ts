// Plugin
import firebasePlugin from './firebase/firebasePlugin'
import useApp from './firebase/useApp'

// Social Auth Providers
import useFirebaseAuthProvider from './firebase/authProviders/useFirebaseAuthProvider'
import useFirebaseFacebookAuth from './firebase/authProviders/useFirebaseFacebookAuth'
import useFirebaseGithubAuth from './firebase/authProviders/useFirebaseGithubAuth'
import useFirebaseGoogleAuth from './firebase/authProviders/useFirebaseGoogleAuth'
import useFirebaseTwitterAuth from './firebase/authProviders/useFirebaseTwitterAuth'

// Auth
import useSignOut from './firebase/useSignOut'
import useAuthState from './firebase/useAuthState'
import useEmailRegister from './firebase/useEmailRegister'
import useEmailSignIn from './firebase/useEmailSignIn'

// Routing
import useAuthenticatedRedirector from './firebase/utils/useAuthenticatedRedirector'
import useUnauthenticatedRedirector from './firebase/utils/useUnauthenticatedRedirector'

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
  useSignOut,
  useEmailRegister,
  useEmailSignIn,
  useApp,
  useAuthenticatedRedirector,
  useUnauthenticatedRedirector,
  handlesErrors,
  useFirestore
}
