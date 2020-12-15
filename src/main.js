import { createApp } from 'vue'
import axios from 'axios'

import config from './config.json'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/tailwind.css'
import './assets/scss/custom.scss'
import 'animate.css'

// axios settings
axios.defaults.baseURL = config.api_url
axios.interceptors.request.use(

    config => {
        
        config.headers.authorization = `Bearer ${store.state.token}`
        return config

    },

    error => {

        return Promise.reject(error)

    }

)

// jwt check
router.beforeEach( async ( to, from, next ) => {

	if( !store.state.token && to.meta.authenticated ) router.push(config.not_logged_page)
	
	else if( store.state.token ) {

		try {

			const response = await axios.get('/user')
			
			store.dispatch('user', response.data)
			store.dispatch('loading', false)
		
		}
		
		catch {
		
			if( to.meta.authenticated ) router.push(config.not_logged_page)
	
			store.dispatch('loading', false)
		
		}

	}

	else
		store.dispatch('loading', false)

	return next( )

})

const app = createApp(App)

app.config.devtools = config.mode === 'development'

app.use(store)
app.use(router)
app.mount('#app')
