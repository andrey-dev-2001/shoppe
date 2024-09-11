import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'dashboard'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'dashboard',
    component: () => import('@/pages/account/ui/dashboard/DashboardPage.vue'),
    meta: {
        title: 'Dashboard - Shoppe',
        description: 'Access your Shoppe dashboard to view recent orders, manage shipping and billing addresses, and update your account details and password.',
        keywords: 'dashboard, account dashboard, recent orders, manage addresses, account settings, Shoppe user, password update',
        ogTitle: 'Shoppe - User Dashboard',
        ogDescription: 'Easily manage your orders, addresses, and account settings from your Shoppe dashboard. Stay organized and up to date with your profile.',
        twitterCard: 'summary_large_image',
        twitterTitle: 'Shoppe – User Dashboard',
        twitterDescription: 'Manage your orders, addresses, and account settings conveniently from your Shoppe dashboard. Keep your profile updated for a better shopping experience.',
    }
}
