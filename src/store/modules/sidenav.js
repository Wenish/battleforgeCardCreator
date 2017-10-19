import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'

const state = {
  isOpen: false
}

const getters = {
  [getterNames.getSidenav]: (state, getters) => (
    state.isOpen
  )
}

const mutations = {
  [mutationTypes.OPEN_SIDENAV] (state) {
    state.isOpen = true
  },
  [mutationTypes.CLOSE_SIDENAV] (state) {
    state.isOpen = false
  },
  [mutationTypes.TOGGLE_SIDENAV] (state) {
    state.isOpen = !state.isOpen
  }
}

export default {
  state,
  getters,
  mutations
}
