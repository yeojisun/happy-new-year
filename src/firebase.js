import {initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    //databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASEURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
    // 인증키 
};

const firebaseApp = initializeApp(firebaseConfig);  //1차 정보 접근
const database = getFirestore(firebaseApp);  //정보가 올바르면 아래 파이어스토어 접근

export default database;