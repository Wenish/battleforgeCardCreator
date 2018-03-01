<template>
  <div class="page-container">

      <BfCard v-if="getCardById != undefined || getCardById != null"
            :card-name="getCardById.cardName"
            :cardImageUrl="getCardById.cardImageUrl"
            :cardCost="getCardById.cardCost"
            :orbType1="getCardById.orbType1"
            :orbType2="getCardById.orbType2"
            :orbType3="getCardById.orbType3"
            :orbType4="getCardById.orbType4"
            :charge="getCardById.charge"
            :entityCount="getCardById.entityCount"
            :entityName="getCardById.entityName"
            :damageType="getCardById.damageType"
            :damage="getCardById.damage"
            :healthType="getCardById.healthType"
            :health="getCardById.health"
            :editionSymbol="getCardById.editionSymbol"
            :affinity="getCardById.affinity"
            :spellIcon1="getCardById.spellIcon1"
            :spellIcon2="getCardById.spellIcon2"
            :spellIcon3="getCardById.spellIcon3"
            :spellIcon4="getCardById.spellIcon4"
            :spellName1="getCardById.spellName1"
            :spellName2="getCardById.spellName2"
            :spellName3="getCardById.spellName3"
            :spellName4="getCardById.spellName4"
            />
  </div>
</template>

<script>
import BfCard from '@/components/BfCard'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'card',
  components: {
    BfCard
  },
  created () {
    this.$store.commit('SET_ACTIVE_CARD', this.route.params.cardId)
    this.$store.dispatch('GET_CARD_BY_ID', this.route.params.cardId)
  },
  computed: {
    ...mapState(['route']),
    ...mapGetters(['getCardById'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container{
  max-width: 600px;
  margin: auto;
}
</style>
