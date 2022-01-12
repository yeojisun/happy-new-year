// import Header from '../components/Header';
// import { useNavigate } from "react-router-dom";

// function ProfilePage() {
//   const history = useNavigate();
//   const user_id = sessionStorage.getItem("id");
//   const nickName = sessionStorage.getItem("nickName");

//   const getProfile = async () => {
//     try {
//       // Kakao SDK API를 이용해 사용자 정보 획득
//       let data = await window.Kakao.API.request({
//         url: "/v2/user/me",
//       });
//       // 사용자 정보 저장
//       sessionStorage.setItem("id", data.id);
//       sessionStorage.setItem("nickName", data.properties.nickname);
      
//     } catch (err) {
//       console.log(err);
//       alert("error: 로그인 조회");
//       history("/");
//     }
//   };

//     // 로그인 상태
//     if(user_id === null || user_id === '') {
//       // useEffect(() => {
//         getProfile();
//       // }, []);
//     }

//   return (
//     <div>
//       <Header />  
//       <h2>{user_id}</h2>
//       <h2>{nickName}</h2>
//     </div>
//   );
// }
// export default ProfilePage;
