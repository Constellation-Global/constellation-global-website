import './index.css'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import {createHead} from '@vueuse/head'

const app = createApp(App)
const head = createHead()
app.use(head)
    .use(createPinia())
    .use(router)

app.mount('#app')
