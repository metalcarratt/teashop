import { createApp } from 'vue'
import App from './App.vue'
const imagePreloader = require('vue-image-preloader');

createApp(App).use(imagePreloader).mount('#app');
