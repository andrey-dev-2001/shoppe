import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'orders'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'orders',
    component: () => import('@/pages/account/ui/orders/OrdersPage.vue'),
    meta: {
        title: 'Orders - Shoppe',
    },
}
