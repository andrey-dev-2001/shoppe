import type { RouteRecordRaw } from 'vue-router'
import DetailsPage from '@/pages/account/ui/details/DetailsPage.vue'

export const routeName = 'details'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'details',
    component: DetailsPage,
    meta: {
        title: 'Account Details - Shoppe',
        description: 'Update your account details, including name, email, and password for a secure and personalized shopping experience at Shoppe.',
        keywords: 'account details, update account, account settings, password change, Shoppe, profile update, user account',
        ogTitle: 'Shoppe - Account Details',
        ogDescription: 'Manage and update your account information easily with Shoppe. Change your name, email, and password to keep your account secure.',
        twitterCard: 'summary_large_image',
        twitterTitle: 'Shoppe – Account Details',
        twitterDescription: 'Keep your account information up to date on Shoppe. Easily change your name, email, and password to stay secure.',
    }
}
