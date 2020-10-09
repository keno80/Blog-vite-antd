import {createRouter, createWebHashHistory} from "vue-router";
import Layout from "../layout/index.vue";
import Home from '../views/Home/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home,
        meta: {title: '首页'}
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
