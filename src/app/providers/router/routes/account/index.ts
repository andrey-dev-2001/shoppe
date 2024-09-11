import type { RouteRecordRaw } from 'vue-router';
import { route as dashboardRoute } from './dashboard';
import { route as downloadsRoute } from './downloads';
import { route as addressesRoute } from './addresses';
import { route as detailsRoute } from './details';
import { route as ordersRoute } from './orders';
import AccountPage from '@/pages/account/ui/account/AccountPage.vue';

export const routeName = 'account';

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/account',
    redirect: { name: 'dashboard' },
    component: AccountPage,
    children: [
        dashboardRoute,
        downloadsRoute,
        addressesRoute,
        detailsRoute,
        ordersRoute
    ],
    meta: {
        title: 'Account',
    },
};
