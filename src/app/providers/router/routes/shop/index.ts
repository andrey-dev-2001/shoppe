import type { RouteRecordRaw } from 'vue-router'

import { route as productRoute} from './product'

export const routeName = 'CatalogPage'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/shop',
    component: () => import('@/pages/shop/ui/catalog/CatalogPage.vue'),
    children: [productRoute],
    meta: {
        title: 'Каталог',
        layout: 'DefaultLayout',
    },
}
