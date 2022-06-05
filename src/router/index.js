import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import Notifications from '../views/Notifications.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
