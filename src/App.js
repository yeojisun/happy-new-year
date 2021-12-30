import firebase from './firebase';
import React,{useState,useEffect} from 'react';

function App() {
  const [users,setUsers]=useState([]);
  const db = firebase.firestore();
  const fetchUsers=async()=>{
    const response=db.collection('happynewyear');
    const data=await response.get();
    data.doc("users").forEach(item=>{
      setUsers([...users,item.data()])
    })
  };
  useEffect(() => {
    fetchUsers();
  }, );
  return (
    <div className="App">
      {
        users && users.map(user=>{
          return(
            <div className="blog-container">
              <h4>{user.user_id}</h4>
              <p>{user.user_pw}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;