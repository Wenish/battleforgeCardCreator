<template>
  <md-sidenav class="md-left" ref="leftSidenav" @open="OPEN_SIDENAV" @close="CLOSE_SIDENAV" v-bind:class="{ 'md-active': sidenav.isOpen }">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">Sidenav content</h3>
      </div>
    </md-toolbar>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
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
