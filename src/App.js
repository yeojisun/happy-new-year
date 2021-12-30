import React, { Component } from 'react';
import firebase from './firebase';

class App extends Component {
  
  render() {
    const db = firebase.firestore();
    db.settings({experimentalForceLongPolling: true, merge: true});

      db.collection("happynewyear").get().then((res)=>{
        res.forEach((doc) =>{
          console.log(doc.data())
        })
      });

    return (
      <div className="App">
       <h1>Hello!! Firebase!!1~</h1>
      </div>
    );
  }
}

export default App;