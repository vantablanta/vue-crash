  
import { createRouter, createWebHistory } from 'vue-router'

import about from '../views/about.vue'
import home from '../views/home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router