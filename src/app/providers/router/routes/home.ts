import type { RouteRecordRaw } from 'vue-router'
import {HomePage} from "@/pages";

export const routeName: string = 'home'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/',
    component: HomePage,
    meta: {
        title: 'Home - Shoppe',
        metaDescription: 'Shop the latest jewelry trends at Shoppe. From earrings to necklaces, discover our collection of stylish accessories.'
    }
}
