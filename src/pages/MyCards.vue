<template>
  <div class="page-container">
    <div v-if="!getCardsByUserId">
    No Cardz RIP
    </div>
    <div v-if="getCardsByUserId">
      <div
        v-for="(card, key) in getCardsByUserId"
        :key="key">
        <router-link :to="'/card/' + key">
        <BfCard

          :card-name="card.cardName"
          :cardImageUrl="card.cardImageUrl"
          :cardCost="card.cardCost"
          :orbType1="card.orbType1"
          :orbType2="card.orbType2"
          :orbType3="card.orbType3"
          :orbType4="card.orbType4"
          :charge="card.charge"
          :entityCount="card.entityCount"
          :entityName="card.entityName"
          :damageType="card.damageType"
          :damage="card.damage"
          :healthType="card.healthType"
          :health="card.health"
          :editionSymbol="card.editionSymbol"
          :affinity="card.affinity"
          :spellIcon1="card.spellIcon1"
          :spellIcon2="card.spellIcon2"
          :spellIcon3="card.spellIcon3"
          :spellIcon4="card.spellIcon4"
          :spellName1="card.spellName1"
          :spellName2="card.spellName2"
          :spellName3="card.spellName3"
          :spellName4="card.spellName4"
        />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BfCard from '@/components/BfCard'
export default {
  name: 'mycards',
  components: {
    BfCard
  },
  created () {
    this.$store.dispatch('GET_CARDS_BY_USER_ID', this.getCurrentUser.uid)
  },
  computed: {
    ...mapGetters(['getCardsByUserId', 'getCurrentUser'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container{
  max-width: 300px;
  margin: auto;
}
</style>
