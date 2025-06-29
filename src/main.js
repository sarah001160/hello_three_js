import './style.css' //總樣式
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia()).use(router); //鏈式寫法
//也可以分開寫
// app.use(createPinia());
// app.use(router);

app.mount('#app');
