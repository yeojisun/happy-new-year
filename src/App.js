import React, { Component } from 'react';
import firebase from './firebase';

class App extends Component {
  
  render() {
    const db = firebase.firestore();
    db.settings({experimentalForceLongPolling: true, merge: true});

      db.collection("happynewyear").doc("greeting_img").get().then((doc) => {
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
       <h1>Hello!! Firebase!!1~</h1>
      </div>
    );
  }
}

export default App;