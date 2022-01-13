import React from "react";
import { BrowserRouter } from 'react-router-dom'; //추가할 부분
import { Route, Routes } from 'react-router-dom';

import ProfilePage from './pages/ProfilePage';
import MainPage from './pages/MainPage';
import AuthCallback from './pages/authCallback';

import firebase from './firebase';
import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import MemoList from './pages/Memo/List';

//import Button from '@mui/material/Button';

// const db = firebase.firestore();

// export const getNotes = async () => {
//   const notesSnapshot = await getDocs(collection(db, "happynewyear"));
//   const notesList = notesSnapshot.docs.map((doc) => doc.data());
//   console.log(notesList);
//   return notesList;
// };



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<MainPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/oauth/callback' element={<AuthCallback />} />
          <Route exact path='/memolist/:id' element={<MemoList />} />
        </Routes>
      </BrowserRouter>


    </>);
}
// https://velopert.com/3417 참고123
export default App;
