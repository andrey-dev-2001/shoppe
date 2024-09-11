import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'dashboard'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'dashboard',
    component: () => import('@/pages/account/ui/dashboard/DashboardPage.vue'),
    meta: {
        title: 'Dashboard - Shoppe',
    },
}
