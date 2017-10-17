import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'

const state = {
  user: null
}

const getters = {
  [getterNames.getUser]: (state, getters) => (
    state.user
  )
}

const mutations = {
  [mutationTypes.UPDATE_USER] (state, user) {
    state.user = user
  }
}

export default {
  state,
  getters,
  mutations
}
