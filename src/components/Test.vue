<template>
  <div class="hello">{{ msg }}</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'This is the "Test" Component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
  color: red;
}
</style>
