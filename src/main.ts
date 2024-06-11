import './index.css'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import {createHead} from '@vueuse/head'
import VueGtag from "vue-gtag";

const app = createApp(App)
const head = createHead()
app.use(head)
    .use(createPinia())
    .use(router)

app.use(VueGtag, {
    config: { id: "G-VY5WXDCX4K" }
});

app.mount('#app')
