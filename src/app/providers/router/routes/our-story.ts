import type { RouteRecordRaw } from 'vue-router'
import OurStoryPage from '@/pages/our-story/ui/OurStoryPage.vue'

export const routeName = 'our-story'

export const route: RouteRecordRaw = {
    path: '/our-story',
    name: routeName,
    component: OurStoryPage,
    meta: {
        title: 'Our Story - Shoppe',
        description: 'Learn more about our story and mission, how we create jewelry and why we choose only the best materials.',
        keywords: 'our story, mission, jewelry, bracelets, earrings, jewelry items',
        ogTitle: 'Shoppe - Our Story',
        ogDescription: 'Discover the story of Shoppe and learn more about our philosophy of jewelry creation.',
        twitterCard: 'summary_large_image',
        twitterTitle: 'Shoppe – Our Story',
        twitterDescription: 'Get to know us better through our story and philosophy.',
    },
}
