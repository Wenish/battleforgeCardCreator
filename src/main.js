// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import '../theme/index.css'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

// firebase
import './initFirebase'

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })

// Sync the router with the vuex store. This registers `store.state.route`
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
