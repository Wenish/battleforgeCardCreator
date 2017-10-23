import * as actionTypes from '../actionTypes'
import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'
import firebase from 'firebase'

const state = {
  displayName: null,
  photoURL: null,
  isAnonymous: true
}

const actions = {
  [actionTypes.GET_FIREBASE_AUTH_CHANGE] ( { commit } ) {
    firebase.auth().onAuthStateChanged(user => {
      var userPayload = {
        displayName: null,
        photoURL: null,
        isAnonymous: true,
      };
      if (user) {
        // User is signed in.
        userPayload.displayName = user.displayName
        userPayload.photoURL = user.photoURL
        userPayload.isAnonymous = user.isAnonymous
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
  }
}

export default {
  state,
  actions,
  mutations
}
