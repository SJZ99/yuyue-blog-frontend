import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		alias: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/program',
		name: 'Program',
	},
	{
		path: '/literature',
		name: 'Literature',
	},
	{
		path: '/chat',
		name: 'Chat',
	},
	{
		path: '/login',
		name: 'Login',
	},
]

const router = new VueRouter({
	routes
})

export default router
