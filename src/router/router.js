import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: r => require.ensure([], () => r(require('../page/login/login.vue')), 'login')
    },
    {
      path: '/home',
      name: 'home',
      component: r => require.ensure([], () => r(require('../page/home/home.vue')), 'home')
    },
    {
      path: '/mine',
      name: 'home',
      component: r => require.ensure([], () => r(require('../page/mine/mine.vue')), 'mine')
    },
    // {
    //   path: '/404',
    //   name: '404',
    //   component: r => require.ensure([], () => r(require('../page/404/404.vue')), '404')
    // },
    // {path:'/404', redirect:'/404', hidden:true}
  ]
})

