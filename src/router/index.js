import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home';
import Search from '../views/Search';
import Notifications from '../views/Notifications';
import UserInfo from '../views/UserInfo';


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
  },
  {
    path: '/userinfo',
    name: 'UserInfo',
    component: UserInfo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
