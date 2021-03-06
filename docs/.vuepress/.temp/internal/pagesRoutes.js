import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","About",["/index.html","/README.md"]],
  ["v-6e294014","/auth-state.html","Auth State",["/auth-state","/auth-state.md"]],
  ["v-e697be50","/email-password-registration.html","Email Password Registration",["/email-password-registration","/email-password-registration.md"]],
  ["v-26a74aac","/email-password-sign-in.html","Email Password Sign In",["/email-password-sign-in","/email-password-sign-in.md"]],
  ["v-5dc4b15a","/getting-started.html","Getting Started",["/getting-started","/getting-started.md"]],
  ["v-082324d0","/guarding-routes.html","Guarding routes",["/guarding-routes","/guarding-routes.md"]],
  ["v-dd7db3fc","/sign-out.html","Signing Out",["/sign-out","/sign-out.md"]],
  ["v-5ee818d6","/social-auth-providers.html","Social Auth Providers",["/social-auth-providers","/social-auth-providers.md"]],
  ["v-3706649a","/404.html","",["/404"]],
  ["v-6a33a287","/firestore.html","Firestore",["/firestore","/firestore.md"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
