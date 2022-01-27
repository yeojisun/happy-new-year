
import { DialogTitle, TextField, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import * as common from '../../CommonFunction';

import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import PropTypes from 'prop-types';
// import InsertForm from "./InsertForm";
import firebase from '../../firebase';

import Styled from "./ViewStyled";
function AddBottari(props) {
  const { onClose, selectedValue, open, user_id } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const addBott = (value) =>{
      
    const database = getFirestore(firebase);
    addDoc(collection(database, `users/${user_id}/greetings`), {
                grt_contents: "테스트입니다123",
                grt_date: serverTimestamp(),
                grt_img: "i_02",
                grt_title: "테스트",
                grt_from: "누구게"
            });
  };

  const handleItemClick = (value) => {
    onClose(value);
  };


    // 상세화면
    return (
      <Styled onClose={handleClose} open={open}
        PaperProps={{
          style: {
            backgroundPosition: 'center',
            backgroundColor: 'white',
            width: "55vh",
            height: "100vh"
          },
        }}>
        <DialogTitle><IconButton aria-label="close" id="btn_close" onClick={() => handleItemClick()}><CloseIcon />
      </IconButton></DialogTitle>
      <form action="/" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Submitted form!'); this.handleClose(); } }>
          <TextField name="grt_from" hintText="from" />
          <TextField name="grt_title" hintText="title" />
          <TextField name="grt_conten ts" hintText="Content" />
          <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
          <Button onClick={() => addBott()}>추가하기</Button>
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
