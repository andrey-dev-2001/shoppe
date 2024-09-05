import type { RouteRecordRaw } from 'vue-router'
import {defineAsyncComponent} from "vue";

export const routeName: string = 'forgot-password'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/forgot-password',
    component: defineAsyncComponent(() => import('@/pages/forgot-password/ui/ForgotPasswordPage.vue')),
    meta: {
        title: 'Forgot password',
    },
}
