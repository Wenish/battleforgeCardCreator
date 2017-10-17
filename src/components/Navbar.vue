<template>
  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <router-link to="/"><el-menu-item index="Home">Card Creator</el-menu-item></router-link>
    <router-link to="/feed"><el-menu-item index="Feed">Feed</el-menu-item></router-link>
    <router-link to="/impressum"><el-menu-item index="Impressum">Impressum</el-menu-item></router-link>
    <!--
    <router-link to="/login"><el-menu-item index="Login">Login</el-menu-item></router-link>
  -->
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'navbar',
  data () {
    return {
      activeIndex: this.$route.name
    }
  },
  computed: {
    ...mapState(['route'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu {
    border-radius: 0px;
}
</style>
