import firebase from 'firebase'

export default {
  saveCard(card) {
    var data = {
      ...card.data
    }
    data.uid = firebase.auth().currentUser.uid
    if (card.key == "") {
      data.created = firebase.firestore.FieldValue.serverTimestamp()
      return firebase.firestore().collection('cards').add(data)
    } else {
      return firebase.firestore().collection('cards').doc(card.key).update(data)
    }
  },
  getCardById(cardId) {
    return firebase.firestore().collection('cards').doc(cardId).get()
  },
  getCardsByUserId(userId) {
    return firebase.firestore().collection('cards').where('uid', '==', userId).get()
  },
  getLatestCardFeed() {
    return firebase.firestore().collection('cards').orderBy('created', 'desc').limit(30).get()
  },
  deleteCard(cardId) {
    return firebase.firestore().collection('cards').doc(cardId).delete()
  },
}
