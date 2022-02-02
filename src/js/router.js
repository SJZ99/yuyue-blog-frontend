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
		path: '/program',
		name: 'Program',
		component: () => import('../views/Menu-Program.vue')
	},
	{
		path: '/program/:lang',
		name: 'Program',
		component: () => import('../views/ArticleList-Program.vue')
	},
	{
		path: '/program/:lang/:id',
		name: 'Program',
		component: () => import('../views/Article.vue')
		
	},
	{
		path: '/literature',
		name: 'Literature',
		component: () => import('../views/Menu-Literature.vue')
	},
	{
		path: '/literature/:seriesId',
		name: 'Literature',
		component: () => import('../views/ArticleList-Literature.vue')
	},
	{
		path: '/literature/:seriesId/:id',
		name: 'Literature',
		component: () => import('../views/Article.vue')
		
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
	routes,
	scrollBehavior () {
		return {x: 0, y: 0}
	}
})

export default router
