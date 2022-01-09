import React from 'react';

const Auth = () => {
    const REST_API_KEY = "60907393ed75205b0f734690841d8219";
    const REDIRECT_URI = "http://localhost:3000/oauth/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    return (
        <h1><a href={KAKAO_AUTH_URL}>Kakao Login</a></h1>
    );
};

export default Auth;