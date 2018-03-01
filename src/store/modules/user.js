import * as actionTypes from '../actionTypes'
import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'
import firebase from 'firebase'

const state = {
  displayName: null,
  photoURL: null,
  isAnonymous: true,
  uid: null,
}

const getters = {
  [getterNames.getCurrentUser]: (state, getters) => state
}

const actions = {
  [actionTypes.GET_FIREBASE_AUTH_CHANGE] ( { commit } ) {
    firebase.auth().onAuthStateChanged(user => {
      var userPayload = {
        displayName: null,
        photoURL: null,
        isAnonymous: true,
        uid: null
      };
      if (user) {
        // User is signed in.
        userPayload.displayName = user.displayName
        userPayload.photoURL = user.photoURL
        userPayload.isAnonymous = user.isAnonymous
        userPayload.uid = user.uid
      }
      commit('UPDATE_USER', userPayload)
    })
  }
}

const mutations = {
  [mutationTypes.UPDATE_USER] (state, user) {
    state.displayName = user.displayName || 'Anonymous'
    state.isAnonymous = user.isAnonymous
    state.photoURL = user.photoURL
    state.uid = user.uid
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
