import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'forgot-password'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/forgot-password',
    component: () => import('@/pages/forgot-password/ui/ForgotPasswordPage.vue'),
    meta: {
        title: 'Forgot password',
    },
}
