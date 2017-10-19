<template>
  <md-sidenav class="md-left" ref="leftSidenav" @open="OPEN_SIDENAV" @close="CLOSE_SIDENAV" v-bind:class="{ 'md-active': sidenav.isOpen }">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">Menu</h3>
      </div>
    </md-toolbar>

    <p>Hello there! ;)</p>
  </md-sidenav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'sidenav',
  computed: {
    ...mapState(['route', 'sidenav'])
  },
  methods: {
    ...mapMutations([
      'CLOSE_SIDENAV',
      'OPEN_SIDENAV'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
