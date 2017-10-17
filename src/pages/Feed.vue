<template>
  <div class="page-container">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'feed',
  data () {
    return {
      msg: 'Feed'
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
