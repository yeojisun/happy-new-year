import React, { Component } from 'react';
import firebase from './firebase';

class App extends Component {
  
  render() {
    const db = firebase.firestore();
      var col = db.collection("happynewyear");
       col.get()
       .then( query => {
         // var array = query.map(a => a.data());
         // console.log(array);
         var array = []
         query.forEach(function(doc) {
           array.push(doc.data());
         });
         this.setCol(array);
       });
    console.log(db);
    return (
      <div className="App">
       <h1>Hello!! Firebase!!~</h1>
      </div>
    );
  }
}

export default App;