import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'product'

export const route: RouteRecordRaw = {
    name: routeName,
    path: ':id',
    component: () => import('@/pages/shop/ui/product/ProductPage.vue'),
}
