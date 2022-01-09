import React from "react";

const Auth = () => {
    const REST_API_KEY = "60907393ed75205b0f734690841d8219";
    const REDIRECT_URI = "http://localhost:3000/oauth/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const user_id = sessionStorage.getItem("id");
    const nickName = sessionStorage.getItem("nickName");

    const logout = () => {
        alert("not yet");
    };

    if(user_id != null && user_id !== '') {
        return (
            <div>
                <h2>{user_id}</h2>
                <h2>{nickName}</h2>
                
                <h2 onClick={logout}>로그아웃</h2>
            </div>
        );
    } else {
        return (
            <h1>
                <a href={KAKAO_AUTH_URL}>
                    <img src="../assets/img/kakao_login_medium_wide.png" alt="kakao login button"></img>
                </a>
            </h1>
        );
    }
};

export default Auth;