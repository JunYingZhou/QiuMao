import { createApp } from 'vue';
import '@/assets/css/index.less';
import App from '@/app/app.vue';
import router from '@/app/router';
import '@/mock';
import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App);
app.use(router);
app.mount('#app');

