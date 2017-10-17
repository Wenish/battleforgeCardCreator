import firebase from 'firebase'
import store from './store'
import firebaseui from 'firebaseui'

firebase.initializeApp({
  apiKey: "AIzaSyCWQOJPcGeO92Fk9j-cW6WenSmxj6HafPc",
  authDomain: "battleforge-card-creator.firebaseapp.com",
  databaseURL: "https://battleforge-card-creator.firebaseio.com",
  projectId: "battleforge-card-creator",
  storageBucket: "battleforge-card-creator.appspot.com",
  messagingSenderId: "774459301247"
})

export const ui = new firebaseui.auth.AuthUI(firebase.auth())

/**
 * Sync store.state.user with firebase.auth().currentUser
 *
 * This callback is called when firebase.auth() detects user changes,
 * so just update the vuex store with the new user object.
 */
firebase.auth().onAuthStateChanged(user => {
  console.log(user);
  store.commit('UPDATE_USER', user)
})
