import api from '../../api/card'
import * as actionTypes from '../actionTypes'
import * as mutationTypes from '../mutationTypes'
import * as getterNames from '../getterNames'
import firebase from 'firebase'

const state = {
  cards: {},
  activeCard: null
}


const getters = {
    [getterNames.getCardById]: (state, getters) => state.cards[state.activeCard]
}

const actions = {
  [actionTypes.GET_CARDS] ({ commit, getters, state }) {
    var database = firebase.database()
    database.ref('cards').on('value', function(snap){
      commit('UPDATE_CARDS', snap.val())
    })
  },
  async [actionTypes.GET_CARD_BY_ID]  ({commit, state}, cardId) {
    var cardData = await api.getCardById(cardId)
    commit('ADD_CARD', cardData)
  }
}

const mutations = {
  [mutationTypes.UPDATE_CARDS] (state, cards) {
    state.cards = {
      ...state.cards,
      ...cards
    }
  },
  [mutationTypes.ADD_CARD] (state, card) {
    state.cards = {
      ...state.cards,
      [card.key]: card.val(),
    }
  },
  [mutationTypes.SET_ACTIVE_CARD] (state, cardId) {
    state.activeCard = cardId
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
