import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'sign-in'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'sign-in',
    component: () => import('@/pages/auth/ui/sign-in/SignInPage.vue'),
}
