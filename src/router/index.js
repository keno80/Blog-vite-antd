import {createRouter, createWebHistory} from "vue-router";
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
      },
      {
        path: 'article/:id',
        name: 'article',
        component: () => import('../views/Article/index.vue'),
        meta: {title: '文章详情页'}
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' -- 爱吃鱼的猫的博客'
  next()
})

export default router
