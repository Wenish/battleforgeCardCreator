import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './modules/firebase'
import hello from './modules/hello'
import sidenav from './modules/sidenav'
import user from './modules/user'
import editCard from './modules/editCard'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  modules: {
    editCard,
    firebase,
    hello,
    sidenav,
    user
  },
  strict: DEBUG
})
