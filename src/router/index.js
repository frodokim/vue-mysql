import { createRouter, createWebHistory } from 'vue-router'
import TestView from '../views/TestView.vue'
import Apple from '../views/Apple.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/testView',
    name: 'TestView',
    component: TestView
  },
  {
    path: '/apple',
    name: 'Apple',
    component: Apple
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
