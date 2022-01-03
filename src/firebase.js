import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    // apiKey: "AIzaSyBNJvPesCSv7sMBvLFk3sdTNqx9Reud-cE",
    // authDomain: "happynewyear-2a527.firebaseapp.com",
    // projectId: "happynewyear-2a527",
    // storageBucket: "happynewyear-2a527.appspot.com",
    // messagingSenderId: "789134578125",
    // appId: "1:789134578125:web:62410aab9155f4ef3ff484",
    // measurementId: "G-35FH7SJYY3"
    // 인증키 
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

const firebaseApp = initializeApp(firebaseConfig);  //1차 정보 접근

export default firebaseApp;