import axios from "axios";
import qs from "qs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const REST_API_KEY = "60907393ed75205b0f734690841d8219";
  const REDIRECT_URI = "http://localhost:3000/oauth/callback";
  const CLIENT_SECRET = "Nn9719qjn4vLQx1NYXEcXdSWkOa0H2K0";
  const history = useNavigate();
  useEffect(() => {
    // calllback으로 받은 인가코드
    const code = new URL(window.location.href).searchParams.get("code");

    const getToken = async () => {
      const payload = qs.stringify({
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: code,
        client_secret: CLIENT_SECRET
      });
      try {
        // access token 가져오기
        const res = await axios.post(
          "https://kauth.kakao.com/oauth/token",
          payload
        );
        //console.log(res);
        // Kakao Javascript SDK 초기화
        window.Kakao.init(REST_API_KEY);
        // access token 설정
        window.Kakao.Auth.setAccessToken(res.data.access_token);
        history("/"); //Todo: 리스트로 이동시켜야 함?
      } catch (err) {
        console.log(err);
        alert("error: login access token");
        history("/");
      }
    };
    getToken();
  }, [history]);
  
  return null;
 };

export default AuthCallback;