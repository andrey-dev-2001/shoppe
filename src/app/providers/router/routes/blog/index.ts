import type { RouteRecordRaw } from 'vue-router'

import { route as articleRoute} from './article'

export const routeName = 'blog'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/blog',
    component: () => import('@/pages/blog/ui/blog/BlogPage.vue'),
    children: [articleRoute],
    meta: {
        title: 'Блог',
        layout: 'DefaultLayout',
    },
}
