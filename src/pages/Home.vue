<template>
  <div class="page-container">
    <CardSettings></CardSettings>
    <BfCard></BfCard>
  </div>
</template>

<script>
import CardSettings from '@/components/CardSettings'
import BfCard from '@/components/BfCard'

ga('set', 'page', '/');
ga('send', 'pageview');

export default {
  name: 'home',
  components: {
    CardSettings,
    BfCard
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
