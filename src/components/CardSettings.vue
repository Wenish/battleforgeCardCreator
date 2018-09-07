<template>
  <form novalidate @submit.stop.prevent="submit">
    <md-input-container>
      <label>Card Name</label>
      <md-input v-model="cardName"></md-input>
    </md-input-container>
    <!--
    <md-input-container>
      <label>Crad Picture</label>
      <md-file v-on:selected="handleSelect" v-model="cardImage.name" accept="image/*"></md-file>
    </md-input-container>
    -->
    <md-input-container>
      <label>Card Picture Url</label>
      <md-input v-model="cardImageUrl"></md-input>
    </md-input-container>
    <md-input-container>
      <label>Card Cost</label>
      <md-input type="number" v-model="cardCost"></md-input>
    </md-input-container>

    <md-layout md-gutter>
      <md-layout>
        <md-input-container>
          <label for="orbType1">Orb 1</label>
          <md-select name="orbType1" id="orbType1" v-model="orbType1">
            <md-option v-for="item in orbTypes"
            :key="item.value"
            :value="item.value">{{ item.label }}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>

      <md-layout>
        <md-input-container>
          <label for="orbType2">Orb 2</label>
          <md-select name="orbType2" id="orbType2" v-model="orbType2">
            <md-option v-for="item in orbTypes"
            :key="item.value"
            :value="item.value">{{ item.label }}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>

      <md-layout>
        <md-input-container>
          <label for="orbType3">Orb 3</label>
          <md-select name="orbType3" id="orbType3" v-model="orbType3">
            <md-option v-for="item in orbTypes"
            :key="item.value"
            :value="item.value">{{ item.label }}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>

      <md-layout>
        <md-input-container>
          <label for="orbType4">Orb 4</label>
          <md-select name="orbType4" id="orbType4" v-model="orbType4">
            <md-option v-for="item in orbTypes"
            :key="item.value"
            :value="item.value">{{ item.label }}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>

    </md-layout>

    <md-input-container>
      <label>Charge</label>
      <md-input type="number" v-model="charge"></md-input>
    </md-input-container>
    <md-input-container>
      <label>Entity Count</label>
      <md-input type="number" v-model="entityCount"></md-input>
    </md-input-container>
    <md-input-container>
      <label>Entity Name</label>
      <md-input v-model="entityName"></md-input>
    </md-input-container>


    <md-layout md-gutter>
      <md-layout>
        <md-input-container>
          <label for="damageType">Damage Type</label>
          <md-select name="damageType" id="damageType" v-model="damageType">
            <md-option v-for="item in damageTypes"
            :key="item.value"
            :value="item.value">{{ item.label }}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
          <label>Damage</label>
          <md-input type="number" v-model="damage"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>

    <md-layout md-gutter>
      <md-layout>
        <md-input-container>
          <label for="healthType">Health Type</label>
          <md-select name="healthType" id="healthType" v-model="healthType">
            <md-option v-for="item in healthTypes"
            :key="item.value"
            :value="item.value">{{ item.label }}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
          <label>Health</label>
          <md-input type="number" v-model="health"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>




    <md-input-container>
      <label for="editionSymbol">Edition Symbole</label>
      <md-select name="editionSymbol" id="editionSymbol" v-model="editionSymbol">
        <md-option v-for="item in editionSymbols"
        :key="item.value"
        :value="item.value">{{ item.label }}</md-option>
      </md-select>
    </md-input-container>
    <md-input-container>
      <label for="affinity">Affinity</label>
      <md-select name="affinity" id="affinity" v-model="affinity">
        <md-option v-for="item in affinities"
        :key="item.value"
        :value="item.value">{{ item.label }}</md-option>
      </md-select>
    </md-input-container>

    <md-layout md-gutter>
      <md-layout>
        <md-input-container>
          <label for="spellIcon1">Spell Icon 1</label>
          <md-select name="spellIcon1" id="spellIcon1" v-model="spellIcon1">
            <md-option v-for="item in spells"
            :key="item.value"
            :value="item.value">{{ item.label }}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>

      <md-layout>
        <md-input-container>
          <label>Spell 1</label>
          <md-input v-model="spellName1"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>

    <md-layout md-gutter>
      <md-layout>
        <md-input-container>
          <label for="spellIcon2">Spell Icon 2</label>
          <md-select name="spellIcon2" id="spellIcon2" v-model="spellIcon2">
            <md-option v-for="item in spells"
            :key="item.value"
            :value="item.value">{{ item.label }}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>

      <md-layout>
        <md-input-container>
          <label>Spell 2</label>
          <md-input v-model="spellName2"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>

    <md-layout md-gutter>
      <md-layout>
        <md-input-container>
          <label for="spellIcon3">Spell Icon 3</label>
          <md-select name="spellIcon3" id="spellIcon3" v-model="spellIcon3">
            <md-option v-for="item in spells"
            :key="item.value"
            :value="item.value">{{ item.label }}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>

      <md-layout>
        <md-input-container>
          <label>Spell 3</label>
          <md-input v-model="spellName3"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>


    <md-layout md-gutter>
      <md-layout>
        <md-input-container>
          <label for="spellIcon4">Spell Icon 4</label>
          <md-select name="spellIcon4" id="spellIcon4" v-model="spellIcon4">
            <md-option v-for="item in spells"
            :key="item.value"
            :value="item.value">{{ item.label }}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>

      <md-layout>
        <md-input-container>
          <label>Spell 4</label>
          <md-input v-model="spellName4"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>

  </form>
</template>

<script>
import orbTypes from '@/common/orbTypes'
import damageTypes from '@/common/damageTypes'
import healthTypes from '@/common/healthTypes'
import editionSymbols from '@/common/editionSymbols'
import spells from '@/common/spells'
import affinities from '@/common/affinities'


export default {
  name: 'cardSettings',
  data () {
    return {
      orbTypes: orbTypes,
      damageTypes: damageTypes,
      healthTypes: healthTypes,
      editionSymbols: editionSymbols,
      spells: spells,
      affinities: affinities
    }
  },
  computed: {
    cardName: {
      get () {
        return this.$store.state.editCard.data.cardName
      },
      set (value) {
        this.$store.commit('UPDATE_CARDNAME', value)
      }
    },
    /*
    cardImage: {
      get () {
        return this.$store.state.editCard.cardImage
      }
    },
    */
    cardImageUrl: {
      get () {
        return this.$store.state.editCard.data.cardImageUrl
      },
      set (value) {
        this.$store.commit('UPDATE_CARDIMAGEURL', value)
      }
    },
    cardCost: {
      get () {
        return this.$store.state.editCard.data.cardCost
      },
      set (value) {
        this.$store.commit('UPDATE_CARDCOST', value)
      }
    },
    orbType1: {
      get () {
        return this.$store.state.editCard.data.orbType1
      },
      set (value) {
        this.$store.commit('UPDATE_ORBTYPE1', value)
      }
    },
    orbType2: {
      get () {
        return this.$store.state.editCard.data.orbType2
      },
      set (value) {
        this.$store.commit('UPDATE_ORBTYPE2', value)
      }
    },
    orbType3: {
      get () {
        return this.$store.state.editCard.data.orbType3
      },
      set (value) {
        this.$store.commit('UPDATE_ORBTYPE3', value)
      }
    },
    orbType4: {
      get () {
        return this.$store.state.editCard.data.orbType4
      },
      set (value) {
        this.$store.commit('UPDATE_ORBTYPE4', value)
      }
    },
    charge: {
      get () {
        return this.$store.state.editCard.data.charge
      },
      set (value) {
        this.$store.commit('UPDATE_CHARGE', value)
      }
    },
    entityCount: {
      get () {
        return this.$store.state.editCard.data.entityCount
      },
      set (value) {
        this.$store.commit('UPDATE_ENTITYCOUNT', value)
      }
    },
    entityName: {
      get () {
        return this.$store.state.editCard.data.entityName
      },
      set (value) {
        this.$store.commit('UPDATE_ENTITYNAME', value)
      }
    },
    damageType: {
      get () {
        return this.$store.state.editCard.data.damageType
      },
      set (value) {
        this.$store.commit('UPDATE_DAMAGETYPE', value)
      }
    },
    damage: {
      get () {
        return this.$store.state.editCard.data.damage
      },
      set (value) {
        this.$store.commit('UPDATE_DAMAGE', value)
      }
    },
    healthType: {
      get () {
        return this.$store.state.editCard.data.healthType
      },
      set (value) {
        this.$store.commit('UPDATE_HEALTHTYPE', value)
      }
    },
    health: {
      get () {
        return this.$store.state.editCard.data.health
      },
      set (value) {
        this.$store.commit('UPDATE_HEALTH', value)
      }
    },
    editionSymbol: {
      get () {
        return this.$store.state.editCard.data.editionSymbol
      },
      set (value) {
        this.$store.commit('UPDATE_EDITIONSYMBOL', value)
      }
    },
    affinity: {
      get () {
        return this.$store.state.editCard.data.affinity
      },
      set (value) {
        this.$store.commit('UPDATE_AFFINITY', value)
      }
    },
    spellIcon1: {
      get () {
        return this.$store.state.editCard.data.spellIcon1
      },
      set (value) {
        this.$store.commit('UPDATE_SPELLICON1', value)
      }
    },
    spellIcon2: {
      get () {
        return this.$store.state.editCard.data.spellIcon2
      },
      set (value) {
        this.$store.commit('UPDATE_SPELLICON2', value)
      }
    },
    spellIcon3: {
      get () {
        return this.$store.state.editCard.data.spellIcon3
      },
      set (value) {
        this.$store.commit('UPDATE_SPELLICON3', value)
      }
    },
    spellIcon4: {
      get () {
        return this.$store.state.editCard.data.spellIcon4
      },
      set (value) {
        this.$store.commit('UPDATE_SPELLICON4', value)
      }
    },
    spellName1: {
      get () {
        return this.$store.state.editCard.data.spellName1
      },
      set (value) {
        this.$store.commit('UPDATE_SPELLNAME1', value)
      }
    },
    spellName2: {
      get () {
        return this.$store.state.editCard.data.spellName2
      },
      set (value) {
        this.$store.commit('UPDATE_SPELLNAME2', value)
      }
    },
    spellName3: {
      get () {
        return this.$store.state.editCard.data.spellName3
      },
      set (value) {
        this.$store.commit('UPDATE_SPELLNAME3', value)
      }
    },
    spellName4: {
      get () {
        return this.$store.state.editCard.data.spellName4
      },
      set (value) {
        this.$store.commit('UPDATE_SPELLNAME4', value)
      }
    }
  },
  /*
  methods: {
    handleSelect(file) {
        this.$store.commit('UPDATE_CARDIMAGE', file[0])
    }
  }
  */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  background: white;
  padding: 15px 20px;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
}
</style>
