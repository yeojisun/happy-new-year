import React from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import firebase from '../firebase';

const Auth = (props) => {
    // const [user_id, setUserId] = useState();
    // const [nickName, setNickName] = useState();

    const history = useNavigate();

    // 로그인
    const REST_API_KEY = "60907393ed75205b0f734690841d8219";
    const REDIRECT_URI = `${process.env.REACT_APP_URL}/oauth/callback`;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
    // 회원정보 가져오기
    // useEffect(() => {
        const getProfile = async () => {
            try {


                // Kakao SDK API를 이용해 사용자 정보 획득
                let data = await window.Kakao.API.request({
                    url: "/v2/user/me",
                });
                const database = getFirestore(firebase); // firestore 접근
                const q = query(collection(database, 'users'), where('user_id', '==', data.id));
                getDocs(q).then(userChk =>{ // user_id가 DB에 등록됐는 지 체크, 없으면 추가한다.
                    console.log(userChk.size);
                    if(userChk.size === 0)
                    {
                         addDoc(collection(database, `users`), {
                                user_id: data.id,
                                user_name: data.properties.nickname,
                                 });
                    }
                })

                // list 이동
                
                history(`/memolist/${data.id}`, {state : {nickName: data.properties.nickname}});

            } catch (err) {
                console.log(err);
                alert("error: 로그인 조회");
            }
        };
        // getProfile();
    // }, []);
    
    if (!window.Kakao.Auth || !window.Kakao.Auth.getAccessToken()) {
        return (
            <h1>
                <a href={KAKAO_AUTH_URL}>
                    <img src="../assets/img/kakao_login_medium_wide.png" alt="kakao login button"></img>
                </a>
            </h1>
        );
    } else {
        getProfile();

        return (
            <div></div>
        );
    }
};

export default Auth;