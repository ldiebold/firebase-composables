import useAuthRedirector from "./useAuthRedirector";
import { RouteLocationRaw, Router } from 'vue-router'
import { MaybeRef } from '@vueuse/core'
import { useRouter } from "vue-router"

export default (redirectTo: MaybeRef<RouteLocationRaw>, router: Router = useRouter()) => {
  return {
    ...useAuthRedirector('unauthenticated', redirectTo, router)
  }
}