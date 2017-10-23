<template>
  <div class="page-container">
    <h1>{{ msg }}</h1>
    <div id="firebaseui-auth-container" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import dialogPolyfill from 'dialog-polyfill'
import uiConfig from '@/common/firebaseUiConfig'

window.dialogPolyfill = dialogPolyfill

export default {
  name: 'login',
  mounted () {
      this.$firebaseui.start('#firebaseui-auth-container', uiConfig)
  },
  data () {
    return {
      msg: 'Login'
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {
    'user.isAnonymous' (val) {
      if (!val) {
        if (this.$router.currentRoute.query.redirect) {
          this.$router.replace(this.$router.currentRoute.query.redirect)
        } else {
          this.$router.replace('/')
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container{
  text-align: center;
  max-width: 500px;
  margin: auto;
}
</style>
