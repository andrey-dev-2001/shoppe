import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'addresses'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'addresses',
    component: () => import('@/pages/account/ui/addresses/AddressesPage.vue'),
    meta: {
        title: 'Addresses - Shoppe',
    },
}
