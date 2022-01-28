import { DialogTitle, DialogContent, TextField, TextareaAutosize, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';

import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import PropTypes from 'prop-types';
import firebase from '../../firebase';

import Styled from "./ViewStyled";
// import { positions, textAlign } from '@mui/system';

function AddBottari(props) {
  const { onClose, selectedValue, open, user_id } = props;

  const [grt_from, setGrt_from] = useState("");
  const [grt_title, setGrt_title] = useState("");
  const [grt_contents, setGrt_contents] = useState("");

  const [i_img, setI_Img] = useState(1);
  
  // 모달 닫기
  const handleClose = () => {
    onClose(selectedValue);
  };

  // 배경 이미지 변경
  const changeImg = (num) => {
    setI_Img(num);
  };

  // 등록 실행
  const addBott = (e) =>{
    e.preventDefault();
    
    try {
      const database = getFirestore(firebase);

      addDoc(collection(database, `users/${user_id}/greetings`), {
                grt_contents: grt_contents,
                grt_date: serverTimestamp(),
                grt_img: `i_0${i_img}`,
                grt_title: grt_title,
                grt_from: grt_from
            }).then((res) => {
              console.log(res);
              alert("등록완료");
              
              setGrt_title("");
              setGrt_contents("");
              setGrt_from("");
  
              handleClose(); // modal close
            });
      } catch(e) {
        alert("error: 등록 실패");
        console.log(e);
    }
  };

  // 등록화면
  return (
    <Styled onClose={handleClose} open={open}
    PaperProps={{
      style: {
        backgroundImage: `url("/assets/img/i_0${i_img}.png")`,
        backgroundSize: '100% 100%',//'cover',//'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'transparent',
        width: "55vh",
        height: "100vh",
        margin: 0,
        padding: 0
      },
    }}>
      <DialogTitle>
        <IconButton aria-label="close" id="btn_close" onClick={() => handleClose()}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <form onSubmit={addBott}>
        <div style={{textAlignLast: 'center'}}>
          <div style={{marginBottom: 10}}>
            <span>배경 선택: </span>
            <Button onClick={() => changeImg(1)} variant="contained" color="primary">1</Button>
            <Button onClick={() => changeImg(2)} variant="contained" color="primary">2</Button>
            <Button onClick={() => changeImg(3)} variant="contained" color="primary">3</Button>
            <Button onClick={() => changeImg(4)} variant="contained" color="primary">4</Button>
            <Button onClick={() => changeImg(5)} variant="contained" color="primary">5</Button>
          </div>
          
          <DialogContent className="dialog_text">
            <TextField name="grt_title" value={grt_title} onChange={e => setGrt_title(e.target.value)} 
              style={{width: "480px"}}
            />  
          </DialogContent>
          <DialogContent>
            <TextareaAutosize name="grt_contents" value={grt_contents} onChange={e => setGrt_contents(e.target.value)} 
              style={{width: "480px", height: "590px"}}
            />
          </DialogContent>
        </div>

        {/* footer */}
        <div style={{position: "absolute", bottom: 0, width: "100%"}}>
          <div style={{textAlign: 'right', marginRight: 25}}>
            <TextField name="grt_from" value={grt_from} onChange={e => setGrt_from(e.target.value)}/>
            <span>로부터</span>
          </div>

          <div style={{textAlign: 'center'}}>
            <Button type="submit">덕담 보내기</Button>
          </div>
        </div>
      </form>
    </Styled>
  );
}

export default AddBottari;

AddBottari.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
// import React, { useState } from 'react';
// // import firebase from '../../firebase';
// // import { getFirestore, ref, set, collection, query, orderBy, getDocs, terminate } from "firebase/firestore";
// // import { useParams } from "react-router-dom";
// import { isEmpty } from '@firebase/util';

// const AddBottari = (props) => {
//     // 본문 영역
//     const [contents, setContents] = useState("");
//     const handleChangeContnets = (e) => {
//         setContents(e.currentTarget.value);
//     };

//     // id
//     // const { id } = useParams();

//     // 등록
//     const actInsert = (e) => {
//         // 공백체크
//         if(contents.trim() == null || isEmpty(contents.trim())) {
//             alert("하고싶은 말을 입력하세요.");
//             setContents("");
//             return;
//         }
   
//         // 등록
//         // const database = getFirestore(firebase);
//         // set(ref(database, 'users/' + id + '/greetings'), {
//         //     username: name,
//         //     email: email,
//         //     profile_picture : imageUrl
//         // });

//         // 모달 닫기
//         props.closeFunction();
//     };

//     return (
//         <div>
//             <textarea name="contents" value={contents} onChange={handleChangeContnets} />
//             <button onClick={actInsert}>등록</button>
//         </div>
//     );
// }

// export default AddBottari;
