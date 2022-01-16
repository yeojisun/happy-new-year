import React from "react";
import { useState } from "react";
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = (props) => {
    const [user_id, setUserId] = useState();
    const [nickName, setNickName] = useState();

    const history = useNavigate();

    // 로그인
    const REST_API_KEY = "60907393ed75205b0f734690841d8219";
    const REDIRECT_URI = "http://localhost:3000/oauth/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
    // 로그아웃 실행
    const logout = () => {
        if (!window.Kakao.Auth.getAccessToken()) {
            console.log('Not logged in.');
            history("/");
          }
          window.Kakao.Auth.logout(function() {
            console.log(window.Kakao.Auth.getAccessToken());
          });
    }
    
    // useEffect(() => {
        // 회원정보 가져오기
        const getProfile = async () => {
            try {
                // Kakao SDK API를 이용해 사용자 정보 획득
                let data = await window.Kakao.API.request({
                    url: "/v2/user/me",
                });
                setUserId(data.id);
                setNickName(data.properties.nickname);

                // list 이동
                history(`/memolist/${data.id}`);

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
            <div>
                <h2>{user_id}</h2>
                <h2>{nickName}</h2>
                
                <div onClick={logout}>
                    로그아웃
                </div>
            </div>
        );
    }
};

export default Auth;