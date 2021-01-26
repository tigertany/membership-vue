import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const  bar = { template: '<div>bar</div>' }
const routes = [
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/bar',
		name: 'Bar',
		component: bar
	},
  {
    path: '/',
    name: 'Home',
    component: Home
  },

]

const router = new VueRouter({
  routes
})

export default router
