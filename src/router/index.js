import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home/home.vue'
import Panel from '../components/Panel/panel.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/panel',
    component: Panel
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
