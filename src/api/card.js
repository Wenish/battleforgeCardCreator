import firebase from 'firebase'

export default {
  saveCard (cardData) {
    cardData.created = firebase.firestore.FieldValue.serverTimestamp()
    cardData.uid = firebase.auth().currentUser.uid
    return firebase.firestore().collection('cards').add(cardData)
  },
  getCardById (cardId) {
    return firebase.firestore().collection('cards').doc(cardId).get()
  },
  getCardsByUserId (userId) {
    return firebase.firestore().collection('cards').where('uid', '==', userId).get()
  },
  getLatestCardFeed () {
    return firebase.firestore().collection('cards').orderBy('created', 'desc').limit(10).get()
  },
  deleteCard (cardId) {
    return firebase.firestore().collection('cards').doc(cardId).delete()
  },
}
