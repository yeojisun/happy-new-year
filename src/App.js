import React, { Component } from 'react';
import firebase from './firebase';

class App extends Component {
  
  render() {
    const db = firebase.firestore();
    db.settings({experimentalForceLongPolling: true});

    db.collection('happynewyear').doc('users').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const data = doc.data();
          console.log(doc.id, data);
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });


    return (
      <div className="App">
       <h1>Hello!! Firebase!!~</h1>
      </div>
    );
  }
}

export default App;