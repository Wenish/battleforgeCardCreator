import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'

const state = {
  displayName: null,
  photoURL: null,
  isAnonymous: true
}

const getters = {
  [getterNames.getUser]: (state, getters) => (
    state
  )
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
  getters,
  mutations
}
