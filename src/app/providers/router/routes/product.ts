import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = '/'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/' +
        '',
    component: () => import('@/pages/home/ui/HomePage.vue'),
    meta: {
        title: 'Home',
        layout: 'DefaultLayout',
    }
}
