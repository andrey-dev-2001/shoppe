import type { RouteRecordRaw } from 'vue-router'
import DownloadsPage from '@/pages/account/ui/downloads/DownloadsPage.vue'

export const routeName = 'downloads'

export const route: RouteRecordRaw = {
    name: routeName,
    path: 'downloads',
    component: DownloadsPage,
    meta: {
        title: 'Downloads - Shoppe',
    },
}
