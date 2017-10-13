<template>
  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <router-link to="/"><el-menu-item index="Home">Card Creator</el-menu-item></router-link>
    <router-link to="/feed"><el-menu-item index="Feed">Feed</el-menu-item></router-link>
  </el-menu>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      activeIndex: this.$route.name
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu {
    border-radius: 0px;
}
</style>
