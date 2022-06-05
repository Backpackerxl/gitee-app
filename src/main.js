import { createApp } from 'vue';
import App from './App.vue';
import Varlet from '@varlet/ui';
import router from './router';
import '@varlet/ui/es/style.js';

createApp(App).use(router).use(Varlet).mount('#app');
