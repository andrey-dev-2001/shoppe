import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'contact-us'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/contact-us',
    component: () => import('@/pages/contact-us/ui/ContactUsPage.vue'),
    meta: {
        title: 'Contact us',
    },
}
