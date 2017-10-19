<template>
  <div class="page-container">
    <h1>{{ msg }}</h1>
    <div id="firebaseui-auth-container" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import { ui } from '../initFirebase'
import 'firebaseui/dist/firebaseui.css'

const uiConfig = {
  callbacks: {
    // Called when the user has been successfully signed in
    signInSuccess (user, credential, redirectUrl) {
      //$router.push('/')
      // Do not redirect.
      return false
    }
  },
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  // Opens IDP Providers sign-in flow in a popup
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      scopes: [
        'public_profile',
        'email'
        // 'user_likes',
        // 'user_friends'
      ]
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: ['https://www.googleapis.com/auth/plus.login']
    },
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // Whether the display name should be displayed in Sign Up page.
      requireDisplayName: true
    },
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      // Invisible reCAPTCHA with image challenge and bottom left badge.
      recaptchaParameters: {
        type: 'image',
        size: 'normal',
        badge: 'bottomleft'
      }
    }
  ]
  // Terms of service url.
  // tosUrl: 'https://www.google.com'
}

export default {
  name: 'login',
  mounted () {
    ui.start('#firebaseui-auth-container', uiConfig)
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
    'user.user' (val) {
      if (val) {
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
  max-width: 500px;
  margin: auto;
}
</style>
