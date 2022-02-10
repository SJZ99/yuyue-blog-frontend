import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { keycloak } from './KeycloakTool'

Vue.use(VueRouter)

const programMeta = {
	routerName: "Program",
	requiresAuth: false,
}

const literatureMeta = {
	routerName: "Literature",
	requiresAuth: false,
}

const dashboardMeta = {
	routerName: "Dashboard",
	requiresAuth: true,
}

const routes = [
	{
		path: '/',
		alias: '/home',
		name: 'Home',
		component: Home,
		meta: {
			routerName: "Home",
			requiresAuth: false,
		},
		
	},
	{
		path: '/program',
		name: 'Program',
		component: () => import('../views/Menu-Program.vue'),
		meta: programMeta,
	},
	{
		path: '/program/:lang',
		name: 'Program Article List',
		component: () => import('../views/ArticleList-Program.vue'),
		meta: programMeta,
	},
	{
		path: '/program/:lang/:id',
		name: 'Program Article',
		component: () => import('../views/Article.vue'),
		meta: programMeta,
		
	},
	{
		path: '/literature',
		name: 'Literature',
		component: () => import('../views/Menu-Literature.vue'),
		meta: literatureMeta,
	},
	{
		path: '/literature/:seriesId',
		name: 'Literature Article List',
		component: () => import('../views/ArticleList-Literature.vue'),
		meta: literatureMeta,
	},
	{
		path: '/literature/:seriesId/:id',
		name: 'Literature Article',
		component: () => import('../views/Article.vue'),
		meta: literatureMeta,
		
	},
	{
		path: '/chat',
		name: 'Chat room',
		meta: {
			routerName: "Chat",
			requiresAuth: false,
		},
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue'),
		meta: {
			routerName: "Login",
			requiresAuth: false,
		},
	},
	{
		path: '/after-login',
		name: 'Dashboard Home',
		component: () => import('../views/dashboard/AfterLogin.vue'),
		meta: dashboardMeta,

	},
	{
		path: '/manage-article',
		name: 'Article Management',
		component: () => import('../views/dashboard/ArticleManagement.vue'),
		meta: dashboardMeta,
	},
	{
		path: '/article-editor/:type/:id',
		name: 'Article Editor (edit)',
		component: () => import('../views/dashboard/ArticleEditor.vue'),
		meta: dashboardMeta,
	},
	{
		path: '/article-editor/create/:type/:subtype',
		name: 'Article Editor (create)',
		component: () => import('../views/dashboard/ArticleEditor.vue'),
		meta: dashboardMeta,
	}
]

const router = new VueRouter({
	routes,
	scrollBehavior () {
		return {x: 0, y: 0}
	}
})

export default router
