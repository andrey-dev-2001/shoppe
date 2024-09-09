import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'home'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/',
    component: () => import('@/pages/home/ui/HomePage.vue'),
    meta: {
        title: 'Home - Shoppe',
        metaDescription: 'Shop the latest jewelry trends at Shoppe. From earrings to necklaces, discover our collection of stylish accessories.'
    }
}
