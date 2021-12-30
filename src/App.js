import React, { Component } from 'react';
import firebase from './firebase';

class App extends Component {
  
  render() {

     var getUserData = async () => {
      var db = firebase.firestore();
      db.settings({experimentalForceLongPolling: true, merge: true});
      var docRef = db.collection("happynewyear").doc("users");
      try {
          var doc = await docRef.get();
          if (doc.exists) {
              console.log(doc.data()); //see below for doc object
              return doc.data();
          } else {
              console.log("No such document!");
          }
      } catch (error) {
          console.log("Error getting document:", error);
      };
    }
      console.log(getUserData);

    return (
      <div className="App">
       <h1>Hello!! Firebase!!~</h1>
      </div>
    );
  }
}

export default App;