import './bootstrap';
import { createApp } from 'vue';

import AppIndex from './components/app-index.vue';

const app = createApp(AppIndex);

app.mount('#app');
