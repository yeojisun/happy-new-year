import React, { Component } from 'react';
import firebase from './firebase';
import { collection, getDocs } from "firebase/firestore";

const db = firebase.firestore();

export const getNotes = async () => {
  const notesSnapshot = await getDocs(collection(db, "happynewyear"));
  const notesList = notesSnapshot.docs.map((doc) => doc.data());
  console.log(notesList);
  return notesList;
};

class App extends Component {
  
  render() {
   
  getNotes();

    return (
      <div className="App">
       <h1>Hello!! Firebase!!1~</h1>
      </div>
    );
  }
}

export default App;