import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/wirefab',
    name: 'Wirefab',
    component: () => import('../views/Wirefab.vue')

  },
  {
    path: '/graph',
    name: 'Graph',
    component: () => import('../views/graph.vue')
    
  },
  {
    path: '/csv',
    name: 'CSV',
    component: () => import('../views/csv.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
