import '@/shared/assets/scss/index.scss';

import { router } from '@/app/providers'
import { createApp } from 'vue';
import App from './app/App.vue';

const app = createApp(App);
app.use(router);
app.mount('#root');
