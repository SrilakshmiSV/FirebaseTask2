// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.deleteOldUser = functions.database.ref('/users/').onWrite((change) => {
  const parentRef = change.after.ref.parent; // reference to the parent
  
  if (snapshot.childElementCount > 10) {
  const olduserQuery=parentRef.orderByChild('age').limitToLast(1);
  
  return olduserQuery.once('value').then((snapshot) => {
    
    const updates = {};
    snapshot.forEach(child => {
      updates[child.key] = null;
    });
    
    return parentRef.update(updates);
  });
  }
  return null;
});
