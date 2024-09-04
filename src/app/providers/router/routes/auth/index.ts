import type { RouteRecordRaw } from 'vue-router';

import { route as signInRoute } from './signIn';
import { route as signUpRoute } from './signUp';

export const routeName = 'auth';

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/auth',
    redirect: { name: 'sign-in' },
    component: () => import('@/pages/auth/ui/AuthPage.vue'),
    children: [
        signInRoute,
        signUpRoute,
    ],
    meta: {
        title: 'Auth',
        layout: 'DefaultLayout',
    },
};
