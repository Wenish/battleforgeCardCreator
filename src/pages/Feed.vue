<template>
  <div class="page-container">
    Feedpage
  </div>
</template>

<script>
ga('set', 'page', '/feed');
ga('send', 'pageview');
export default {
  name: 'feed',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
