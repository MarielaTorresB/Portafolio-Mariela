import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Skills.vue')
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: () => import(/* webpackChunkName: "about" */ './views/Proyectos.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import(/* webpackChunkName: "about" */ './views/Contacto.vue')
    }
  ]
})
