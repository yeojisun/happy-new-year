import React, { Component } from 'react';
import firebase from './firebase';

class App extends Component {
  
  render() {
    const db = firebase.firestore();
    db.settings({experimentalForceLongPolling: true});
      var docRef = db.collection("happynewyear").doc("users");
      console.log(db);
      console.log(docRef);
      foo();

// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });

    return (
      <div className="App">
       <h1>Hello!! Firebase!!~</h1>
      </div>
    );
  }
}
async function foo() {
  console.log("start")
  const db = firebase.firestore();
  db.settings({experimentalForceLongPolling: true});
  var doc = db.collection("happynewyear").doc("users");
  try {
      var allCitiesSnapShot = await doc.get();
      console.log(allCitiesSnapShot);
      // allCitiesSnapShot.forEach(doc => {
      //     console.log(doc.id, '=>', doc.data().name);
      // });
      console.log("end")
  }
  catch (err) {
      console.log('Error getting documents', err);
  }
}
export default App;