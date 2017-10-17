import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import store from '@/store'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Feed from '@/pages/Feed'
import Impressum from '@/pages/Impressum'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (store.state.user.user) {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/logout',
      beforeEnter: (to, from, next) => {
        if (store.state.user) {
          firebase.auth().signOut()
          next('/')
        } else {
          next('/login')
        }
      }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.user.user) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

router.afterEach((to, from) => {
  ga('set', 'page', to.path);
  ga('send', 'pageview');
})

export default router
