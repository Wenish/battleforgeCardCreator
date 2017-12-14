import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import store from '@/store'
import CardEditor from '@/pages/CardEditor'
import Login from '@/pages/Login'
import Feed from '@/pages/Feed'
import Impressum from '@/pages/Impressum'
import MyCards from '@/pages/MyCards'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: CardEditor
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (!store.state.user.isAnonymous) {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      beforeEnter: (to, from, next) => {
        if (!store.state.user.isAnonymous) {
          firebase.auth().signOut()
          next('/')
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/mycards',
      name: 'MyCards',
      component: MyCards,
      meta: { requiresAuth: true }
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed,
      meta: { requiresAuth: true }
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
    if (store.state.user.isAnonymous) {
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
