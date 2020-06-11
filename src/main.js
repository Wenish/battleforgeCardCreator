// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import firebaseConfig from './firebaseConfig'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import VueMoment from 'vue-moment'

Vue.config.productionTip = false

Vue.prototype.$firebase = firebase.initializeApp(firebaseConfig)
Vue.prototype.$firebase.firestore().settings({timestampsInSnapshots: true});
Vue.prototype.$firebaseui = new firebaseui.auth.AuthUI(firebase.auth())
Vue.use(VueMaterial)
Vue.use(VueMoment);

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'white',
  warn: 'orange',
  background: 'white'
})

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
