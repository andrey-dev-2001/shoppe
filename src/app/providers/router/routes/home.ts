import type { RouteRecordRaw } from 'vue-router'
import {defineAsyncComponent} from "vue";

export const routeName: string = 'home'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/',
    component: defineAsyncComponent(() => import('@/pages/home/ui/HomePage.vue')),
    meta: {
        title: 'Home',
        headerBorder: false
    },
}
