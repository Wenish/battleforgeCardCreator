import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Feed from '@/pages/Feed'

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
    }
  ]
})
