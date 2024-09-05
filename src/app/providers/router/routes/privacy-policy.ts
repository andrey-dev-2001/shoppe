import type { RouteRecordRaw } from 'vue-router'
import { defineAsyncComponent } from 'vue'

export const routeName: string = 'privacy-policy'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/privacy-policy',
    component: defineAsyncComponent(() => import('@/pages/privacy-policy/ui/PrivacyPolicyPage.vue')),
    meta: {
        title: 'Privacy policy',
    },
}
