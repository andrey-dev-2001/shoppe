import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'notFoundPage'

export const route: RouteRecordRaw = {
  path: '/not-found',
  name: routeName,
  component: () => import('@/pages/not-found/ui/NotFoundPage.vue'),
  meta: {
    title: 'Сторінка не знайдена',
    layout: 'EmptyLayout',
  },
}
