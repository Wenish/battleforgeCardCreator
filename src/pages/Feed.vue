<template>
  <div class="page-container">
    {{ msg }}
    <md-button class="md-raised">Default</md-button>
    <md-button class="md-raised md-primary">Primary</md-button>
    <md-button class="md-raised md-accent">Accent</md-button>
    <md-button class="md-raised md-warn">Warn</md-button>
    <md-button class="md-raised md-primary" disabled>Disabled</md-button>
    <md-button class="md-raised md-dense">Dense</md-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BfCard from '@/components/BfCard'

export default {
  name: 'feed',
  components: {
    BfCard
  },
  data () {
    return {
      msg: 'Feed'
    }
  },
  computed: {
    ...mapState(['cards'])
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
