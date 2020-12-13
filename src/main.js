import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/tailwind.css'
import './assets/scss/custom.scss'
import 'animate.css'

createApp(App).use(router).mount('#app')
