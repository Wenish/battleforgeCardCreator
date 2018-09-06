import api from '../../api/card'
import * as actionTypes from '../actionTypes'
import * as mutationTypes from '../mutationTypes'
import * as getterNames from '../getterNames'
import firebase from 'firebase'

const state = {
  cards: {},
  activeCard: null,
}


const getters = {
    [getterNames.getCardsAsArray]: (state, getters) => {
      var arr = [];
      Object.entries(state.cards).forEach(([key, val]) => {
          val.key = key
          arr.push(val)
      });
      return arr
    },
    [getterNames.getCardById]: (state, getters) => state.cards[state.activeCard],
    [getterNames.getCardsByUserId]: (state, getters) => {
      var uid = getters.getCurrentUser.uid;
      var cards = {};
      Object.entries(state.cards).forEach(([key, val]) => {
          if(val.uid == uid) {
            cards = {
              ...cards,
              [key]: val,
            }
          }
      });
      return cards
    },
    [getterNames.getCardsSortByCreated]: (state, getters) => {
      var arr = getters.getCardsAsArray
      console.log(arr)
      return arr.sort((a, b) => a.created < b.created )
    }
}

const actions = {
  [actionTypes.GET_CARDS] ({ commit, getters, state }) {
    var database = firebase.database()
    database.ref('cards').on('value', function(snap){
      commit('UPDATE_CARDS', snap.val())
    })
  },
  async [actionTypes.GET_LATEST_CARD_FEED] ({commit, state}) {
    var cards = await api.getLatestCardFeed()
    commit('UPDATE_CARDS', cards.val())
  },
  async [actionTypes.GET_CARD_BY_ID]  ({commit, state}, cardId) {
    var cardData = await api.getCardById(cardId)
    commit('ADD_CARD', cardData)
  },
  async [actionTypes.GET_CARDS_BY_USER_ID] ({commit, state, getters}, userId) {
    var dataSnap = await api.getCardsByUserId(userId);
    var cards = {};
    dataSnap.forEach((doc) => {
        cards[doc.id] = doc.data();
        console.log(doc)
    })
    commit('ADD_CARDS', cards);
  },
  async [actionTypes.DELETE_CARD] ({commit, state, getters}, cardId) {
    var card = await api.deleteCard(cardId);
    console.log(card);
    commit('REMOVE_CARD', cardId);
  },
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
      [card.id]: card.data(),
    }
  },
  [mutationTypes.ADD_CARDS] (state, cards) {
    console.log(cards)
    state.cards = {
      ...state.cards,
      ...cards
    }
  },
  [mutationTypes.REMOVE_CARD] (state, cardId) {
    state.cards = {
      ...state.cards,
    };
    delete state.cards[cardId];
  },
  [mutationTypes.SET_ACTIVE_CARD] (state, cardId) {
    state.activeCard = cardId
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
