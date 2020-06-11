<template>
  <div class="page-container">
   <div v-for="card in getCardsSortByCreated" :key="card.key" class="feed-card">
      <div class="date">{{ card.created.seconds | moment("dddd, MMMM Do YYYY") }}</div>
      <BfCard
              :key="card.key"
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
              :cardUrl="`/card/${card.key}`"
              ></BfCard>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import BfCard from '@/components/BfCard'

export default {
  name: 'feed',
  components: {
    BfCard
  },
  created() {
    this.$store.dispatch('GET_LATEST_CARD_FEED')
  },
  computed: {
    ...mapGetters(['getCardsSortByCreated'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container{
  max-width: 500px;
  margin: auto;
}

.feed-card {
    border-radius: 6px;
    background: white;
    padding: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    margin: 10px 0;
}

.date {
  font-weight: bold;
}
</style>
