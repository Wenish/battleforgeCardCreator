import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Feed from '@/pages/Feed'
import Impressum from '@/pages/Impressum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: Impressum
    }
  ]
})
