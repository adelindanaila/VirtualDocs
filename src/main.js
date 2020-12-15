import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './axios'

import './assets/css/tailwind.css'
import './assets/scss/custom.scss'
import 'animate.css'
import store from './store'

// Multiple middleware

function nextFactory( context, middleware, index ) {

	const subsequentMiddlware = middleware[index]

	if( !subsequentMiddlware )
		return context.next

	return (...parameters) => {

		context.next( ...parameters )

		const nextMiddleware = nextFactory( context, middleware, index + 1 )
		subsequentMiddlware({  ...context, next: nextMiddleware } )

	}

}

router.beforeEach( ( to, from, next ) => {

	if( to.meta.middleware ) {

		const middleware = Array.isArray( to.meta.middleware ) ? to.meta.middleware : [to.meta.middleware]
		const context = { from, next, router, to }
		const nextMiddleware = nextFactory( context, middleware, 1 )
		const authenticated = to.meta.authenticated

		return middleware[0]( { ...context, next: nextMiddleware, store, router, authenticated } )

	}

	return next( )

})

createApp(App).use(store).use(router).mount('#app')
