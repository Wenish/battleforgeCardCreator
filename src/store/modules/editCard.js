import api from '../../api/card'
import * as actionTypes from '../actionTypes'
import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'
import emptyCard from '@/common/emptyCard'
const state = {
  key: '',
  data: {
    ...emptyCard
  }
}

const actions = {
  async [actionTypes.GET_EDIT_CARD_BY_ID]({
    commit,
    state
  }, cardId) {
    commit('SET_EDIT_CARD_KEY', '')
    commit('SET_EDIT_CARD_DATA', emptyCard)
    var card = await api.getCardById(cardId)
    if (card.exists) {
      commit('SET_EDIT_CARD_KEY', cardId)
      commit('SET_EDIT_CARD_DATA', card.data())
    }
  },
  async [actionTypes.SAVE_CARD]({
    commit,
    state
  }) {
    var result = await api.saveCard(state)
    if (result) {
      commit('SET_EDIT_CARD_KEY', result.id);
    }
  }
}

const mutations = {
  [mutationTypes.RESET_EDIT_CARD](state, value) {
    state.key = ''
    state.data = {
      ...state.data,
      ...emptyCard
    }
  },
  [mutationTypes.SET_EDIT_CARD_DATA](state, value) {
    state.data = {
      ...value
    }
  },
  [mutationTypes.SET_EDIT_CARD_KEY](state, value) {
    state.key = value
  },
  [mutationTypes.UPDATE_CARDNAME](state, value) {
    state.data.cardName = value
  },
  /*
  [mutationTypes.UPDATE_CARDIMAGE] (state, file) {
      state.cardImage.file = file
      state.cardImage.url = URL.createObjectURL(file)
      state.cardImage.name = file.name

  },
  */
  [mutationTypes.UPDATE_CARDIMAGEURL](state, value) {
    state.data.cardImageUrl = value
  },
  [mutationTypes.UPDATE_CARDCOST](state, value) {
    state.data.cardCost = Number(value)
  },
  [mutationTypes.UPDATE_ORBTYPE1](state, value) {
    state.data.orbType1 = value
  },
  [mutationTypes.UPDATE_ORBTYPE2](state, value) {
    state.data.orbType2 = value
  },
  [mutationTypes.UPDATE_ORBTYPE3](state, value) {
    state.data.orbType3 = value
  },
  [mutationTypes.UPDATE_ORBTYPE4](state, value) {
    state.data.orbType4 = value
  },
  [mutationTypes.UPDATE_CHARGE](state, value) {
    state.data.charge = Number(value)
  },
  [mutationTypes.UPDATE_ENTITYCOUNT](state, value) {
    state.data.entityCount = Number(value)
  },
  [mutationTypes.UPDATE_ENTITYNAME](state, value) {
    state.data.entityName = value
  },
  [mutationTypes.UPDATE_DAMAGETYPE](state, value) {
    state.data.damageType = value
  },
  [mutationTypes.UPDATE_DAMAGE](state, value) {
    state.data.damage = Number(value)
  },
  [mutationTypes.UPDATE_HEALTHTYPE](state, value) {
    state.data.healthType = value
  },
  [mutationTypes.UPDATE_HEALTH](state, value) {
    state.data.health = Number(value)
  },
  [mutationTypes.UPDATE_EDITIONSYMBOL](state, value) {
    state.data.editionSymbol = value
  },
  [mutationTypes.UPDATE_AFFINITY](state, value) {
    state.data.affinity = value
  },
  [mutationTypes.UPDATE_SPELLICON1](state, value) {
    state.data.spellIcon1 = value
  },
  [mutationTypes.UPDATE_SPELLICON2](state, value) {
    state.data.spellIcon2 = value
  },
  [mutationTypes.UPDATE_SPELLICON3](state, value) {
    state.data.spellIcon3 = value
  },
  [mutationTypes.UPDATE_SPELLICON4](state, value) {
    state.data.spellIcon4 = value
  },
  [mutationTypes.UPDATE_SPELLNAME1](state, value) {
    state.data.spellName1 = value
  },
  [mutationTypes.UPDATE_SPELLNAME2](state, value) {
    state.data.spellName2 = value
  },
  [mutationTypes.UPDATE_SPELLNAME3](state, value) {
    state.data.spellName3 = value
  },
  [mutationTypes.UPDATE_SPELLNAME4](state, value) {
    state.data.spellName4 = value
  }
}

export default {
  state,
  actions,
  mutations
}
