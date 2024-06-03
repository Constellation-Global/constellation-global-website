import './index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import LottieVuePlayer from "@lottiefiles/vue-lottie-player";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(LottieVuePlayer);

app.mount('#app')
