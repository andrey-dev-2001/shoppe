import type { RouteRecordRaw } from 'vue-router'
import { route as homeRoute } from './home'
import { route as notFoundRoute} from './not-found'
import { route as redirectRoute} from  './redirect'

const rawRoutes: RouteRecordRaw[] = [
  homeRoute,
  notFoundRoute,
  redirectRoute
]

const routes: RouteRecordRaw[] = rawRoutes.map((route) => ({
  ...route,
  beforeEnter: (to, from, next) => {
    return next();
  }
}))

export { routes }
