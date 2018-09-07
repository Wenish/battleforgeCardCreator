<template>
  <div class="page-container">
    <BfCard :card-name="editCard.data.cardName"
            :cardImageUrl="editCard.data.cardImageUrl"
            :cardCost="editCard.data.cardCost"
            :orbType1="editCard.data.orbType1"
            :orbType2="editCard.data.orbType2"
            :orbType3="editCard.data.orbType3"
            :orbType4="editCard.data.orbType4"
            :charge="editCard.data.charge"
            :entityCount="editCard.data.entityCount"
            :entityName="editCard.data.entityName"
            :damageType="editCard.data.damageType"
            :damage="editCard.data.damage"
            :healthType="editCard.data.healthType"
            :health="editCard.data.health"
            :editionSymbol="editCard.data.editionSymbol"
            :affinity="editCard.data.affinity"
            :spellIcon1="editCard.data.spellIcon1"
            :spellIcon2="editCard.data.spellIcon2"
            :spellIcon3="editCard.data.spellIcon3"
            :spellIcon4="editCard.data.spellIcon4"
            :spellName1="editCard.data.spellName1"
            :spellName2="editCard.data.spellName2"
            :spellName3="editCard.data.spellName3"
            :spellName4="editCard.data.spellName4"
            ></BfCard>
    <div class="md-layout md-align-center">
        <md-button
          class="md-raised md-primary center"
          v-if="!user.isAnonymous"
          v-bind:disabled="!(!!editCard.data.cardName && !!editCard.data.cardImageUrl)"
          @click="SAVE_CARD">Save Card</md-button>
        <router-link
          tag="md-button"
          to="/login?redirect=/"
          v-if="user.isAnonymous"
          class="md-raised md-primary center" v-bind:disabled="!(!!editCard.data.cardName && !!editCard.data.cardImageUrl)">Login to save your card</router-link>
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
