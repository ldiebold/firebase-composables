import { getAuth, User } from 'firebase/auth'
import useAuthState from '../useAuthState'
import { ref, unref } from 'vue-demi'
import { RouteLocationRaw, useRouter, Router } from 'vue-router'
import { MaybeRef } from '@vueuse/core'

type UserOnCheckedFunction = (user: User | null) => void
type RedirectTriggers = 'authenticated' | 'unauthenticated' | 'error'

export default function useAuthRedirector(
  redirectOn: RedirectTriggers,
  redirectTo: MaybeRef<RouteLocationRaw>,
  router: Router = useRouter()
) {
  const checking = ref(false)
  const auth = getAuth()

  const {
    isAuthenticated,
    user,
    authIsReady
  } = useAuthState()

  const onChecked = ref(null as null | UserOnCheckedFunction)

  function exec() {
    if (typeof onChecked.value === 'function') {
      onChecked.value(user.value)
    }
    triggerRedirect()
  }

  function execOnAuthStateEnsured() {
    if (authIsReady.value) {
      return exec()
    }
    return execOnAuthStateChange()
  }

  function execOnAuthStateChange() {
    checking.value = true
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      authIsReady.value = true
      if (typeof onChecked.value === 'function') {
        onChecked.value(authUser)
      }

      if (!isAuthenticated.value && redirectOn === 'unauthenticated') {
        router.push(unref(redirectTo))
      }

      if (isAuthenticated.value && redirectOn === 'authenticated') {
        router.push(unref(redirectTo))
      }

      checking.value = false
      unsubscribe()
    })
  }

  function triggerRedirect() {
    if (isAuthenticated.value && redirectOn === 'authenticated') {
      router.push(unref(redirectTo))
    }
    if (!isAuthenticated.value && redirectOn === 'unauthenticated') {
      router.push(unref(redirectTo))
    }
  }

  return {
    execOnAuthStateChange,
    execOnAuthStateEnsured,
    exec,
    redirectTo,
    checking,
    onChecked
  }
}