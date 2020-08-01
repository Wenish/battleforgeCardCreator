<template>
  <div class="text">Contribute to the <a href="https://github.com/Wenish/battleforgeCardCreator" target="_blank">project on Github</a> with a pull request.</div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'This is the "Test" Component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  color: black;
  text-align: center;
  padding: 10px;
}

.text a {
    color: blue !important;
}
</style>
