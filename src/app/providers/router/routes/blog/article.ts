import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'article'

export const route: RouteRecordRaw = {
    name: routeName,
    path: ':id',
    component: () => import('@/pages/blog/ui/article/ArticlePage.vue'),
}
