import firebase from 'firebase'

export default {
  saveCard (cardData) {
    console.log(firebase)
    cardData.created = firebase.database.ServerValue.TIMESTAMP;
    cardData.uid = firebase.auth().currentUser.uid;

    // Get a key for a new card.
    var newCardKey = firebase.database().ref().child('cards').push().key;
    // Write the new card's data in the cards list
    var updates = {};
    updates['/cards/' + newCardKey] = cardData;

    return firebase.database().ref().update(updates);
  },
  getCardById (cardId) {
    return firebase.database().ref('/cards/' + cardId).once('value');
  }
}
