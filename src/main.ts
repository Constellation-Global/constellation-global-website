import './index.css'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import {createHead} from '@vueuse/head'
import VueGtag from "vue-gtag";
import {VueQueryPlugin} from '@tanstack/vue-query';
import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp(App)
const head = createHead()
app.use(head)
    .use(createPinia())
    .use(router)
    .use(VueQueryPlugin)
    .use(VueGtag, {
        config: {id: "G-VY5WXDCX4K"}
    })
    .use(ToastPlugin);

app.mount('#app');
