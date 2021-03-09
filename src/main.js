import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  vantSet from  './plugins'
import 'amfe-flexible/index.js'; 


createApp(App).use(store).use(router).use(vantSet).mount('#app')
