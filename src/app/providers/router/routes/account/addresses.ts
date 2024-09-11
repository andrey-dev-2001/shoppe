import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'addresses'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'addresses',
    component: () => import('@/pages/account/ui/addresses/AddressesPage.vue'),
    meta: {
        title: 'Addresses - Shoppe',
        description: 'Manage your billing and shipping addresses easily on Shoppe. Update or add new addresses to streamline your shopping experience.',
        keywords: 'address update, billing address, shipping address, manage addresses, Shoppe account, user settings, shipping information',
        ogTitle: 'Shoppe - Manage Addresses',
        ogDescription: 'Effortlessly manage your billing and shipping addresses with Shoppe. Add or edit addresses for a smoother shopping experience.',
        twitterCard: 'summary_large_image',
        twitterTitle: 'Shoppe – Manage Addresses',
        twitterDescription: 'Keep your billing and shipping addresses up to date on Shoppe for faster checkout and deliveries.',
    }
}
