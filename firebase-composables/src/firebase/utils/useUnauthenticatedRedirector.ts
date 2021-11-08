import useAuthRedirector from "./useAuthRedirector";
import { RouteLocationRaw } from 'vue-router'
import { MaybeRef } from '@vueuse/core'

export default (redirectTo: MaybeRef<RouteLocationRaw>) => {
  return {
    ...useAuthRedirector('unauthenticated', redirectTo)
  }
}