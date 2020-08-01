<template>
  <div id="app">

<div class="line"></div>
    <Navbar></Navbar>
    <Sidenav></Sidenav>
    <router-view :key="$route.fullPath"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidenav from '@/components/Sidenav'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: { Navbar, Sidenav, Footer },
  created () {
    this.$store.dispatch('GET_FIREBASE_AUTH_CHANGE')
  }
}
</script>

<style>
body {
  background-color: #f0f2f5 !important;
}

#app {
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
