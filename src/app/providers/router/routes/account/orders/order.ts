import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'order'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/order',
    component: () => import('@/pages/contact-us/ui/ContactUsPage.vue'),
    meta: {
        title: 'Order',
    },
}
