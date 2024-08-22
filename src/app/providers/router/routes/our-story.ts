import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'our-story'

export const route: RouteRecordRaw = {
    path: '/our-story',
    name: routeName,
    component: () => import('@/pages/our-story/ui/OurStoryPage.vue'),
    meta: {
        title: 'Сторінка не знайдена',
        layout: 'EmptyLayout',
    },
}
