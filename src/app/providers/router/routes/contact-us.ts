import type { RouteRecordRaw } from 'vue-router'
import {defineAsyncComponent} from "vue";

export const routeName: string = 'contact-us'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/contact-us',
    component: defineAsyncComponent(() => import('@/pages/contact-us/ui/ContactUsPage.vue')),
    meta: {
        title: 'Contact us',
    },
}
