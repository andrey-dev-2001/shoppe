import type { RouteRecordRaw } from 'vue-router'
import { route as homeRoute } from './home'
import { route as notFoundRoute } from './not-found'
import { route as redirectRoute } from  './redirect'
import { route as catalogRoute } from './shop'
import { route as blogRoute } from './blog'
import { route as ourStoryRoute } from  './our-story'
import { route as authRoute } from './auth'
import { route as contactUsRoute } from './contact-us'
import { route as forgotPasswordRoute } from './forgotPassword'
import { route as privacyPolicyRoute } from './privacy-policy'
import { route as accountRoute } from './account'

const rawRoutes: RouteRecordRaw[] = [
  homeRoute,
  notFoundRoute,
  redirectRoute,
  catalogRoute,
  blogRoute,
  ourStoryRoute,
  authRoute,
  contactUsRoute,
  forgotPasswordRoute,
  privacyPolicyRoute,
  accountRoute
]

const routes: RouteRecordRaw[] = rawRoutes.map((route) => ({
  ...route,
  beforeEnter: (to, from, next) => {
    return next();
  }
}))

export { routes }
