import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'sign-up'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'sign-up',
    component: () => import('@/pages/auth/ui/sign-up/SignUpPage.vue'),
}
