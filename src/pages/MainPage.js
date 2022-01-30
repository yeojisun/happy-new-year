import React from 'react';

//import Header from '../components/Header';
import Styled from "./Styled";
//import { Button } from '@mui/material';
import Auth from "./auth";
// import firebase from '../firebase';
// import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// const database = getFirestore(firebase);  //정보가 올바르면 아래 파이어스토어 접근

function MainPage() {

    // const clickHandler = () => {

    //     // Add a new document in collection "cities"
    //     addDoc(collection(database, "users/SUE3vmEn1CixjZiBBxZZ/greetings"), {
    //         grt_contents: "testetstsdsf1de",
    //         grt_date: serverTimestamp(),
    //         grt_img: "i_01",
    //         grt_title: "test11",
    //         grt_user_id: "1111"
    //     });
    // }
    return (
        <Styled>
            <div className='frame'>
                <main className='main-frame'>
                    <div className="title">2022 <br /> 새해 덕담을 주고받아보아요</div>
                    <Auth />
                    <div>
                        <a href="https://yeossi.notion.site/happy-summer-95e3afc6e9e54d7ba5fc7b9682cac07c" target="_blank" rel="noreferrer" >※누가 맨들었나 보고 싶지 않냐잉※</a>
                    </div>
                </main>
            </div>
        </Styled>
    );
}
export default MainPage;

