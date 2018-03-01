import firebase from 'firebase'

export default {
  saveCard (cardData) {
    var dateNow = new Date();
    console.log(firebase)
    cardData.created = firebase.database.ServerValue.TIMESTAMP;

    // Get a key for a new card.
    var newCardKey = firebase.database().ref().child('cards').push().key;
    // Write the new card's data in the cards list
    var updates = {};
    updates['/cards/' + newCardKey] = cardData;

    return firebase.database().ref().update(updates);
  }
}
