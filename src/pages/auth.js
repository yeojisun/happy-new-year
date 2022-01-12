import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const history = useNavigate();
    const REST_API_KEY = "60907393ed75205b0f734690841d8219";
    // 로그인 URL
    const REDIRECT_URI = "http://localhost:3000/oauth/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
    // 로그아웃 실행
    const logout = () => {
        if (!window.Kakao.Auth.getAccessToken()) {
            console.log('Not logged in.');
            history("/");
            // return;
          }
          window.Kakao.Auth.logout(function() {
            console.log(window.Kakao.Auth.getAccessToken());
          });
    }
    
    // 회원정보 가져오기
    let user_id = "tetst";
    let nickName = "11";
    useEffect(() => {
        const getProfile = async () => {
            try {
                // Kakao SDK API를 이용해 사용자 정보 획득
                let data = await window.Kakao.API.request({
                    url: "/v2/user/me",
                });
                console.log("profile>> ", data.id);
                console.log("profile>> ", data.properties.nickname);

                //Todo: set 못하는중..
                // user_id = data.id;
                // nickName = data.properties.nickname;

                return data;
            } catch (err) {
                console.log(err);
                alert("error: 로그인 조회");
                // history("/");
            }
        };
        getProfile();
    }, []);

    if (!window.Kakao.Auth || !window.Kakao.Auth.getAccessToken()) {
        return (
            <h1>
                <a href={KAKAO_AUTH_URL}>
                    <img src="../assets/img/kakao_login_medium_wide.png" alt="kakao login button"></img>
                </a>
            </h1>
        );
    } else {
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