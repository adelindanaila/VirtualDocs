import { createApp } from 'vue'
import axios from 'axios'

import config from './config.json'
import App from './App.vue'
import router from './router'
import store from './store'

import './axios'

import './assets/css/tailwind.css'
import './assets/scss/custom.scss'
import 'animate.css'

// jwt check

router.beforeEach( async ( to, from, next ) => {

	const token = localStorage.getItem('token')

	if( !token && to.meta.authenticated ) router.push(config.not_logged_page)
	
	else if( token ) {

		try {

			const response = await axios.get('/user')
			
			store.dispatch('user', response.data)
			store.dispatch('loading', false)
		
		}
		
		catch ( error ) {
		
			if( to.meta.authenticated ) router.push(config.not_logged_page)
	
			store.dispatch('loading', false)
		
		}

	}

	return next( )

})

const app = createApp(App)

app.config.devtools = config.mode === 'development'

app.use(store)
app.use(router)
app.mount('#app')
