import type { RouteRecordRaw } from 'vue-router'
import {defineAsyncComponent} from "vue";

export const routeName = 'notFoundPage'

export const route: RouteRecordRaw = {
  path: '/not-found',
  name: routeName,
  component: defineAsyncComponent(() => import('@/pages/not-found/ui/NotFoundPage.vue')),
  meta: {
    title: 'Сторінка не знайдена',
    layout: 'EmptyLayout',
  },
}
