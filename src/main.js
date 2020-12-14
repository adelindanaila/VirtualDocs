import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './axios'

import './assets/css/tailwind.css'
import './assets/scss/custom.scss'
import 'animate.css'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
