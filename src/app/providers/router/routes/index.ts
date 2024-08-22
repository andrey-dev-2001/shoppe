import type { RouteRecordRaw } from 'vue-router'
import { route as homeRoute } from './home'
import { route as notFoundRoute } from './not-found'
import { route as redirectRoute } from  './redirect'
import { route as catalogRoute } from './shop'
import { route as blogRoute } from './blog'
import { route as ourStoryRoute } from  './our-story'

const rawRoutes: RouteRecordRaw[] = [
  homeRoute,
  notFoundRoute,
  redirectRoute,
  catalogRoute,
  blogRoute,
  ourStoryRoute
]

const routes: RouteRecordRaw[] = rawRoutes.map((route) => ({
  ...route,
  beforeEnter: (to, from, next) => {
    return next();
  }
}))

export { routes }
