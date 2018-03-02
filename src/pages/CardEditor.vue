<template>
  <div class="page-container">
    <BfCard :card-name="editCard.cardName"
            :cardImageUrl="editCard.cardImageUrl"
            :cardCost="editCard.cardCost"
            :orbType1="editCard.orbType1"
            :orbType2="editCard.orbType2"
            :orbType3="editCard.orbType3"
            :orbType4="editCard.orbType4"
            :charge="editCard.charge"
            :entityCount="editCard.entityCount"
            :entityName="editCard.entityName"
            :damageType="editCard.damageType"
            :damage="editCard.damage"
            :healthType="editCard.healthType"
            :health="editCard.health"
            :editionSymbol="editCard.editionSymbol"
            :affinity="editCard.affinity"
            :spellIcon1="editCard.spellIcon1"
            :spellIcon2="editCard.spellIcon2"
            :spellIcon3="editCard.spellIcon3"
            :spellIcon4="editCard.spellIcon4"
            :spellName1="editCard.spellName1"
            :spellName2="editCard.spellName2"
            :spellName3="editCard.spellName3"
            :spellName4="editCard.spellName4"
            ></BfCard>
    <div class="md-layout md-align-center">
        <md-button class="md-raised md-primary center" v-if="!user.isAnonymous && (editCard.cardName && editCard.cardImageUrl)" @click="SAVE_CARD">Save Card</md-button>
        <router-link to="/login?redirect=/" v-if="user.isAnonymous">
          <md-button class="md-raised md-primary center">Login to save your card</md-button>
        </router-link>
    </div>
    <CardSettings></CardSettings>
  </div>
</template>

<script>
import CardSettings from '@/components/CardSettings'
import BfCard from '@/components/BfCard'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'cardEditor',
  components: {
    CardSettings,
    BfCard
  },
  computed: {
    ...mapState(['user', 'editCard']),
  },
  methods: {
    ...mapActions(['SAVE_CARD']),
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
