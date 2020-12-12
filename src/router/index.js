import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import Documents from '../views/Documents'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/documents',
    name: 'documents',
    component: Documents
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'font-bold text-gray-900',
  linkExactActiveClass: 'font-bold text-gray-900'
})

export default router
