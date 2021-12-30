import React, { Component } from 'react';
import firebase from './firebase';

class App extends Component {
  
  render() {
    const db = firebase.firestore();
    db.settings({experimentalForceLongPolling: true, merge: true});

    const test = async () => {
      await db
        .collection('happynewyear')
        .get();
    };
    console.log(test);

      db.collection("happynewyear").doc("users")
      .onSnapshot((doc) => {
          console.log("Current data: ", doc.data());
      });

    return (
      <div className="App">
       <h1>Hello!! Firebase!!1~</h1>
      </div>
    );
  }
}

export default App;