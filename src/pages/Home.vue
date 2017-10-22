<template>
  <div class="page-container">
    <BfCard :card-name="cardName"
            :cardImageUrl="cardImage.url"
            :cardCost="cardCost"
            :orbType1="orbType1"
            :orbType2="orbType2"
            :orbType3="orbType3"
            :orbType4="orbType4"
            :charge="charge"
            :entityCount="entityCount"
            :entityName="entityName"
            :damageType="damageType"
            :damage="damage"
            :healthType="healthType"
            :health="health"
            :editionSymbol="editionSymbol"
            :affinity="affinity"
            :spellIcon1="spellIcon1"
            :spellIcon2="spellIcon2"
            :spellIcon3="spellIcon3"
            :spellIcon4="spellIcon4"
            :spellName1="spellName1"
            :spellName2="spellName2"
            :spellName3="spellName3"
            :spellName4="spellName4"
            ></BfCard>
    <CardSettings :card-name="cardName"></CardSettings>
  </div>
</template>

<script>
import CardSettings from '@/components/CardSettings'
import BfCard from '@/components/BfCard'

export default {
  name: 'home',
  components: {
    CardSettings,
    BfCard
  },
  computed: {
    cardName: {
      get () {
        return this.$store.state.editCard.cardName
      },
      set (value) {
        this.$store.commit('UPDATE_CARDNAME', value)
      }
    },
    cardImage: {
      get () {
        return this.$store.state.editCard.cardImage
      }
    },
    cardCost: {
      get () {
        return this.$store.state.editCard.cardCost
      },
      set (value) {
        this.$store.commit('UPDATE_CARDCOST', value)
      }
    },
    orbType1: {
      get () {
        return this.$store.state.editCard.orbType1
      },
      set (value) {
        this.$store.commit('UPDATE_ORBTYPE1', value)
      }
    },
    orbType2: {
      get () {
        return this.$store.state.editCard.orbType2
      },
      set (value) {
        this.$store.commit('UPDATE_ORBTYPE2', value)
      }
    },
    orbType3: {
      get () {
        return this.$store.state.editCard.orbType3
      },
      set (value) {
        this.$store.commit('UPDATE_ORBTYPE3', value)
      }
    },
    orbType4: {
      get () {
        return this.$store.state.editCard.orbType4
      },
      set (value) {
        this.$store.commit('UPDATE_ORBTYPE4', value)
      }
    },
    charge: {
      get () {
        return this.$store.state.editCard.charge
      },
      set (value) {
        this.$store.commit('UPDATE_CHARGE', value)
      }
    },
    entityCount: {
      get () {
        return this.$store.state.editCard.entityCount
      },
      set (value) {
        this.$store.commit('UPDATE_ENTITYCOUNT', value)
      }
    },
    entityName: {
      get () {
        return this.$store.state.editCard.entityName
      },
      set (value) {
        this.$store.commit('UPDATE_ENTITYNAME', value)
      }
    },
    damageType: {
      get () {
        return this.$store.state.editCard.damageType
      },
      set (value) {
        this.$store.commit('UPDATE_DAMAGETYPE', value)
      }
    },
    damage: {
      get () {
        return this.$store.state.editCard.damage
      },
      set (value) {
        this.$store.commit('UPDATE_DAMAGE', value)
      }
    },
    healthType: {
      get () {
        return this.$store.state.editCard.healthType
      },
      set (value) {
        this.$store.commit('UPDATE_HEALTHTYPE', value)
      }
    },
    health: {
      get () {
        return this.$store.state.editCard.health
      },
      set (value) {
        this.$store.commit('UPDATE_HEALTH', value)
      }
    },
    editionSymbol: {
      get () {
        return this.$store.state.editCard.editionSymbol
      },
      set (value) {
        this.$store.commit('UPDATE_EDITIONSYMBOL', value)
      }
    },
    affinity: {
      get () {
        return this.$store.state.editCard.affinity
      },
      set (value) {
        this.$store.commit('UPDATE_AFFINITY', value)
      }
    },
    spellIcon1: {
      get () {
        return this.$store.state.editCard.spellIcon1
      },
      set (value) {
        this.$store.commit('UPDATE_SPELLICON1', value)
      }
    },
    spellIcon2: {
      get () {
        return this.$store.state.editCard.spellIcon2
      },
      set (value) {
        this.$store.commit('UPDATE_SPELLICON2', value)
      }
    },
    spellIcon3: {
      get () {
        return this.$store.state.editCard.spellIcon3
      },
      set (value) {
        this.$store.commit('UPDATE_SPELLICON3', value)
      }
    },
    spellIcon4: {
      get () {
        return this.$store.state.editCard.spellIcon4
      },
      set (value) {
        this.$store.commit('UPDATE_SPELLICON4', value)
      }
    },
    spellName1: {
      get () {
        return this.$store.state.editCard.spellName1
      },
      set (value) {
        this.$store.commit('UPDATE_SPELLNAME1', value)
      }
    },
    spellName2: {
      get () {
        return this.$store.state.editCard.spellName2
      },
      set (value) {
        this.$store.commit('UPDATE_SPELLNAME2', value)
      }
    },
    spellName3: {
      get () {
        return this.$store.state.editCard.spellName3
      },
      set (value) {
        this.$store.commit('UPDATE_SPELLNAME3', value)
      }
    },
    spellName4: {
      get () {
        return this.$store.state.editCard.spellName4
      },
      set (value) {
        this.$store.commit('UPDATE_SPELLNAME4', value)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container{
  max-width: 500px;
  margin: auto;
}
</style>
