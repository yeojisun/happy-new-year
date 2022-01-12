import React from "react";
import { BrowserRouter } from 'react-router-dom'; //추가할 부분
import { Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AuthCallback from './pages/authCallback';

import firebase from './firebase';
import { getFirestore, collection, getDocs, query } from "firebase/firestore";

//import Button from '@mui/material/Button';

// const db = firebase.firestore();

// export const getNotes = async () => {
//   const notesSnapshot = await getDocs(collection(db, "happynewyear"));
//   const notesList = notesSnapshot.docs.map((doc) => doc.data());
//   console.log(notesList);
//   return notesList;
// };

const database = getFirestore(firebase);  //정보가 올바르면 아래 파이어스토어 접근
const q = query(collection(database, "happynewyear"))
getDocs(q).then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    let data = doc.data();  //저장된 데이터
    let id = doc.id;  //고유 아이디
    console.log(data + ":" + id);
  })
})


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<MainPage />} />
          <Route path='/oauth/callback' element={<AuthCallback />} />
        </Routes>
      </BrowserRouter>


    </>);
}
// https://velopert.com/3417 참고123
export default App;
