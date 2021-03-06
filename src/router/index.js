import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
import Login from '@/views/login'
import SecondHome from '@/views/home/second_home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '', // path为空代表二级路由的默认组件
        component: SecondHome// 默认二级路由组件
      }, {
        path: 'comment', // 评论列表地址=>/hoem/comment
        component: () => import('@/views/comment')// 按需加载的方式引入
      }, {
        path: 'material', // 素材管理地址
        component: () => import('@/views/material')
      }, {
        path: 'articles', // 内容列表地址
        component: () => import('@/views/articles')
      }, {
        path: 'publish', // 发布文章地址
        component: () => import('@/views/publish')
      }
    ]
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
