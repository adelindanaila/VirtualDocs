import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import Documents from '../views/Documents'
import AdminHome from '../views/admin/Home'
import AdminDocuments from '../views/admin/Documents'
import AdminUsers from '../views/admin/Users'

const routes = [

	{

		path: '/',
		name: 'Home',
		component: Home

	},

	{

		path: '/documents',
		name: 'Documents',
		component: Documents,

		meta: {
			
			authenticated: true

		}

	},

	{

		path: '/admin',
		name: 'AdminHome',
		component: AdminHome,

		meta: {
			
			authenticated: true,
			admin: true
			
		}

	},

	{
		path: '/admin/documents',
		name: 'AdminDocuments',
		component: AdminDocuments,

		meta: {
			
			authenticated: true,
			admin: true
			
		}

	},

	{
		path: '/admin/users',
		name: 'AdminUsers',
		component: AdminUsers,

		meta: {
			
			authenticated: true,
			admin: true
			
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
