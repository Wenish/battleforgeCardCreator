import * as actionTypes from '../actionTypes'
import * as mutationTypes from '../mutationTypes'
import firebase from 'firebase'

const state = {
  cards: []
}


const actions = {
  [actionTypes.GET_CARDS] ({ commit, getters, state }) {
    var database = firebase.database()
    database.ref('cards').on('value', function(snap){
      commit('UPDATE_CARDS', snap.val())
    })
  }
}

const mutations = {
  [mutationTypes.UPDATE_CARDS] (state, cards) {
    state.cards = {
      ...state.cards,
      ...cards
    }
  }
}

export default {
  state,
  actions,
  mutations
}
