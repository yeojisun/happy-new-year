import React, { Component } from 'react';
import firebase from './firebase';

class App extends Component {
  
  render() {
    firebase.firestore().settings({ experimentalForceLongPolling: true });
    const db = firebase.firestore();
    
      var docRef = db.collection("happynewyear").doc("users");

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

    return (
      <div className="App">
       <h1>Hello!! Firebase!!~</h1>
      </div>
    );
  }
}

export default App;