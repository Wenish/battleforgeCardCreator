import api from '../../api/card'
import * as actionTypes from '../actionTypes'
import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'

const state = {
  key: '',
  isSaved: false,
  data: {
    cardName: '',
    /*
    cardImage: {
      file: null,
      name: '',
      url: ''
    },
    */
    cardImageUrl: '',
    cardCost: 0,
    orbType1: '',
    orbType2: '',
    orbType3: '',
    orbType4: '',
    charge: 0,
    entityCount: 1,
    entityName: '',
    damageType: '',
    damage: 0,
    healthType: '',
    health: 0,
    editionSymbol: '',
    affinity: '',
    spellIcon1: '',
    spellIcon2: '',
    spellIcon3: '',
    spellIcon4: '',
    spellName1: '',
    spellName2: '',
    spellName3: '',
    spellName4: ''
  }
}

const actions = {
  async [actionTypes.SAVE_CARD]({
    commit,
    state
  }) {
    var cardData = {
      ...state.data
    }
    var result = await api.saveCard(cardData)
    console.log(result)
    console.log('Card Saved')
  }
}

const mutations = {
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
