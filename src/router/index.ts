import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Index from '../views/Index.vue'
import TemplateDetail from '../views/templateDetail/TemplateDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {
          path:'',
          name:'home',
          component: Home,
          // meta:{title:'欢迎来到'}
        },
        { path: 'template/:id', name: 'template', component: TemplateDetail, meta: { title: '模版详情' } },
        // { path: 'works', name: 'works', component: Works, meta: { title: '我的作品', requiredLogin: true, } }
        
      ]
    },
    {
      path: '/editor/:id',
      name: 'editor',
      component: import(/* webpackChunkName: "login" */'../views/editor/Editor.vue'),
      meta: { requireLogin: true, title:'编辑我的设计'}
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */  '../views/AboutView.vue'),
      meta:  { redirectAlreadyLogin: true, title: '登录到慕课乐高'}
    }
  ]
})

export default router
