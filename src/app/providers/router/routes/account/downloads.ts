import type { RouteRecordRaw } from 'vue-router'
import DownloadsPage from '@/pages/account/ui/downloads/DownloadsPage.vue'

export const routeName = 'downloads'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'downloads',
    component: DownloadsPage,
    meta: {
        title: 'Downloads - Shoppe',
        description: 'Access your digital downloads from your Shoppe account. Easily download purchased files or browse available products.',
        keywords: 'downloads, digital products, account downloads, Shoppe downloads, file downloads, product downloads',
        ogTitle: 'Shoppe - Downloads',
        ogDescription: 'Manage and download your digital purchases from Shoppe. View available downloads or browse our product catalog.',
        twitterCard: 'summary_large_image',
        twitterTitle: 'Shoppe – Downloads',
        twitterDescription: 'View and download your purchased digital products from Shoppe. Stay organized and get easy access to your files.',
    }

}
