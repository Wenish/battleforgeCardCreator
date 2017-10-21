<template>
  <div id="app">

<div class="line"></div>
    <Navbar></Navbar>
    <Sidenav></Sidenav>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidenav from '@/components/Sidenav'

export default {
  name: 'app',
  components: { Navbar, Sidenav }
}
</script>

<style>
#app {
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
