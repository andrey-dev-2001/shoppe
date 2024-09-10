import '@/shared/assets/scss/index.scss';
import { router } from '@/app/providers'
import { createApp } from 'vue';
import App from './app/App.vue';
import {createHead} from "@vueuse/head";

const app = createApp(App);
app.use(router);
const head = createHead()
app.use(head)

app.mount('#root');
