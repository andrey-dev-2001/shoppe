import type { RouteRecordRaw } from 'vue-router'
import DetailsPage from '@/pages/account/ui/details/DetailsPage.vue'

export const routeName = 'details'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'details',
    component: DetailsPage,
    meta: {
        title: 'Account details - Shoppe',
    },
}
