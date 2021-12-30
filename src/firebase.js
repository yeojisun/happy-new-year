import {initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBNJvPesCSv7sMBvLFk3sdTNqx9Reud-cE",
    authDomain: "happynewyear-2a527.firebaseapp.com",
    projectId: "happynewyear-2a527",
    storageBucket: "happynewyear-2a527.appspot.com",
    messagingSenderId: "789134578125",
    appId: "1:789134578125:web:62410aab9155f4ef3ff484",
    measurementId: "G-35FH7SJYY3"
    // 인증키 
};

const firebaseApp = initializeApp(firebaseConfig);  //1차 정보 접근
const database = getFirestore(firebaseApp);  //정보가 올바르면 아래 파이어스토어 접근

export default database;