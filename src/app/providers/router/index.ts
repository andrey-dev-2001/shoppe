import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

export { pages as AppPages } from './pages'

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})
