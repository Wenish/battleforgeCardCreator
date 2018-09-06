<template>
  <div class="page-container">
    <md-card class="md-warn">
        <md-card-content>
            <h3 class="md-subheading">Information</h3>
            Don't panic. All your Cards are save.<br/>
            We are migrating to a new Database.<br/>
            That's why your old cards are temporarly not avaiable.<br/>
            <div class="md-subhead">07.09.2018</div>
        </md-card-content>
    </md-card>
    <div v-if="!getCardsFromCurrentUser">
    No Cardz RIP
    </div>
    <div v-if="getCardsFromCurrentUser">
        <BfCard v-for="card in getCardsFromCurrentUser"
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
            :cardUrl="`/card/${card.key}`"/>
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
    ...mapGetters(['getCardsFromCurrentUser', 'getCurrentUser'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container{
  max-width: 500px;
  margin: auto;
}
</style>
