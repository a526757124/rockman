import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: resolve => require(['../views/main/index.vue'], resolve),
      children: [
        {
          path: '/home',
          name: 'home',
          component: resolve => require(['../views/home/index.vue'], resolve)
        },
        {
          path: '/node',
          name: 'node',
          component: resolve => require(['../views/node/index.vue'], resolve)
        },
        {
          path: '/task',
          name: 'task',
          component: resolve => require(['../views/task/index.vue'], resolve)
        },
        {
          path: '/logs',
          name: 'logs',
          component: resolve => require(['../views/logs/index.vue'], resolve)
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../views/login.vue'], resolve)
    },
    {
      path: '/login1',
      component: resolve => require(['../views/login_1.vue'], resolve)
    }
  ]
})
