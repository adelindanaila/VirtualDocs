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
		component: Documents
	},
	{
		path: '/admin',
		name: 'AdminHome',
		component: AdminHome
	},
	{
		path: '/admin/documents',
		name: 'AdminDocuments',
		component: AdminDocuments
	},
	{
		path: '/admin/users',
		name: 'AdminUsers',
		component: AdminUsers
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	linkActiveClass: 'font-bold text-gray-900',
	linkExactActiveClass: 'font-bold text-gray-900'
})

export default router
