import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'privacy-policy'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/privacy-policy',
    component: () => import('@/pages/privacy-policy/ui/PrivacyPolicyPage.vue'),
    meta: {
        title: 'Privacy policy',
    },
}
