<template>
  <div>
    <div class="text">Contribute to the <a href="https://github.com/Wenish/battleforgeCardCreator" target="_blank">project on Github</a> with a pull request.</div>
    <div class="text">Here you can also make any <a href="https://github.com/Wenish/battleforgeCardCreator/issues" target="_blank">feature request</a>.</div>
  </div>
</template>

<script>
export default {
  name: 'bfFooter',
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
