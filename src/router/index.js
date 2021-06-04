import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import search from '../views/search.vue'
import library from '../views/Library.vue'
import searched from '../views/searched.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: search
  },
  {
    path: '/searched',
    name: 'Searched',
    component: searched
  },
  {
    path: '/library',
    name: 'Library',
    component: library
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
