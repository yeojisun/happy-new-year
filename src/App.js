import React, { Component } from 'react';
import firebase from './firebase';
import {getFirestore, collection, getDocs, query } from "firebase/firestore";

// const db = firebase.firestore();

// export const getNotes = async () => {
//   const notesSnapshot = await getDocs(collection(db, "happynewyear"));
//   const notesList = notesSnapshot.docs.map((doc) => doc.data());
//   console.log(notesList);
//   return notesList;
// };

const database = getFirestore(firebase);  //정보가 올바르면 아래 파이어스토어 접근
const q = query(collection(database, "happynewyear"))
getDocs(q).then( (querySnapshot)=>{
    querySnapshot.forEach((doc) => {
        let data = doc.data();  //저장된 데이터
        let id = doc.id;  //고유 아이디
        console.log(data+":"+id);
    })
})

class App extends Component {
  
  render() {
  //getNotes();

    return (
      <div className="App">
       <h1>Hello!! Firebase!</h1>
      </div>
    );
  }
}

export default App;