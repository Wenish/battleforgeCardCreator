import * as actionTypes from '../actionTypes'
import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'
import orbTypes from '@/common/orbTypes'

const state = {
  cardName: '',
  cardImage: {
    file: null,
    name: '',
    url: ''
  },
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

const mutations = {
  [mutationTypes.UPDATE_CARDNAME] (state, value) {
    state.cardName = value
  },
  [mutationTypes.UPDATE_CARDIMAGE] (state, file) {
      state.cardImage.file = file
      state.cardImage.url = URL.createObjectURL(file)
      state.cardImage.name = file.name

  },
  [mutationTypes.UPDATE_CARDCOST] (state, value) {
    state.cardCost = Number(value)
  },
  [mutationTypes.UPDATE_ORBTYPE1] (state, value) {
    state.orbType1 = value
  },
  [mutationTypes.UPDATE_ORBTYPE2] (state, value) {
    state.orbType2 = value
  },
  [mutationTypes.UPDATE_ORBTYPE3] (state, value) {
    state.orbType3 = value
  },
  [mutationTypes.UPDATE_ORBTYPE4] (state, value) {
    state.orbType4 = value
  },
  [mutationTypes.UPDATE_CHARGE] (state, value) {
    state.charge = Number(value)
  },
  [mutationTypes.UPDATE_ENTITYCOUNT] (state, value) {
    state.entityCount = Number(value)
  },
  [mutationTypes.UPDATE_ENTITYNAME] (state, value) {
    state.entityName = value
  },
  [mutationTypes.UPDATE_DAMAGETYPE] (state, value) {
    state.damageType = value
  },
  [mutationTypes.UPDATE_DAMAGE] (state, value) {
    state.damage = Number(value)
  },
  [mutationTypes.UPDATE_HEALTHTYPE] (state, value) {
    state.healthType = value
  },
  [mutationTypes.UPDATE_HEALTH] (state, value) {
    state.health = Number(value)
  },
  [mutationTypes.UPDATE_EDITIONSYMBOL] (state, value) {
    state.editionSymbol = value
  },
  [mutationTypes.UPDATE_AFFINITY] (state, value) {
    state.affinity = value
  },
  [mutationTypes.UPDATE_SPELLICON1] (state, value) {
    state.spellIcon1 = value
  },
  [mutationTypes.UPDATE_SPELLICON2] (state, value) {
    state.spellIcon2 = value
  },
  [mutationTypes.UPDATE_SPELLICON3] (state, value) {
    state.spellIcon3 = value
  },
  [mutationTypes.UPDATE_SPELLICON4] (state, value) {
    state.spellIcon4 = value
  },
  [mutationTypes.UPDATE_SPELLNAME1] (state, value) {
    state.spellName1 = value
  },
  [mutationTypes.UPDATE_SPELLNAME2] (state, value) {
    state.spellName2 = value
  },
  [mutationTypes.UPDATE_SPELLNAME3] (state, value) {
    state.spellName3 = value
  },
  [mutationTypes.UPDATE_SPELLNAME4] (state, value) {
    state.spellName4 = value
  }
}

export default {
  state,
  mutations
}
