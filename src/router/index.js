import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import Documents from '../views/Documents'
import AdminHome from '../views/admin/Home'
import AdminDocuments from '../views/admin/Documents'
import AdminUsers from '../views/admin/Users'
import user from '../middleware/user'

const routes = [

	{

		path: '/',
		name: 'Home',
		component: Home,

		meta: {
			
			middleware: [user],
			authenticated: false
			
		}

	},

	{

		path: '/documents',
		name: 'Documents',
		component: Documents,

		meta: {
			
			middleware: [user],
			authenticated: true

		}

	},

	{

		path: '/admin',
		name: 'AdminHome',
		component: AdminHome,

		meta: {
			
			middleware: [user],
			authenticated: true
			
		}

	},

	{
		path: '/admin/documents',
		name: 'AdminDocuments',
		component: AdminDocuments,

		meta: {
			
			middleware: [user],
			authenticated: true
			
		}

	},

	{
		path: '/admin/users',
		name: 'AdminUsers',
		component: AdminUsers,

		meta: {
			
			middleware: [user],
			authenticated: true
			
		}
	}

]

const router = createRouter({

	history: createWebHashHistory(),
	routes,
	linkActiveClass: 'font-bold text-gray-900',
	linkExactActiveClass: 'font-bold text-gray-900'

})

export default router
