<template>
  <md-toolbar>
    <!--
    <md-button class="md-icon-button" v-on:click="TOGGLE_SIDENAV">
      <md-icon>menu</md-icon>
    </md-button>
  -->

    <md-button class="md-icon-button">
      <router-link to="/"><md-icon>home</md-icon></router-link>
    </md-button>

    <h2 class="md-title" style="flex: 1">BF Card Creator</h2>
    <router-link to="/login" v-if="!user.user"><md-button class="md-raised">Login</md-button></router-link>
    <md-menu md-direction="bottom left" v-if="user.user" >
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon>person</md-icon>
      </md-button>

      <md-menu-content>
        <md-menu-item disabled>{{ user.user.displayName }}</md-menu-item>
        <md-menu-item><router-link to="/logout">Logout</router-link></md-menu-item>
      </md-menu-content>
    </md-menu>

  </md-toolbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'navbar',
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapMutations([
      'TOGGLE_SIDENAV'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
