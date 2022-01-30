import { DialogTitle, DialogContent, TextField, IconButton, Button, Avatar  } from '@mui/material';
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
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
      },
    }}>
      <DialogTitle>
        <IconButton aria-label="close" id="btn_close" onClick={() => handleClose()}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
          <DialogContent className="dialog_text">
      <form className="form" onSubmit={addBott}>
          <div style={{textAlignLast: 'center', minHeight:"10%"}}>
            <span>배경 선택: </span>
            
            <IconButton onClick={() => changeImg(1)}>
              <Avatar src={"/assets/img/i_01.png"} />
            </IconButton>
            <IconButton onClick={() => changeImg(2)}>
              <Avatar src={"/assets/img/i_02.png"} />
            </IconButton>
            <IconButton onClick={() => changeImg(3)}>
              <Avatar src={"/assets/img/i_03.png"} />
            </IconButton>
            <IconButton onClick={() => changeImg(4)}>
              <Avatar src={"/assets/img/i_04.png"} />
            </IconButton>
            <IconButton onClick={() => changeImg(5)}>
              <Avatar src={"/assets/img/i_05.png"} />
            </IconButton>
            {/* <Button onClick={() => changeImg(1)} size="small">민들레</Button>
            <Button onClick={() => changeImg(2)} size="small">코스모스</Button>
            <Button onClick={() => changeImg(3)} size="small">국화</Button>
            <Button onClick={() => changeImg(4)} size="small">여러꽃</Button>
            <Button onClick={() => changeImg(5)} size="small">무궁화</Button> */}
          </div>
            <TextField name="grt_title" value={grt_title} onChange={e => setGrt_title(e.target.value)} placeholder='제목을 입력해주세요!'
              style={{width: "100%", minHeight: "10%"}} InputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
            />  
            <TextField name="grt_contents" value={grt_contents} onChange={e => setGrt_contents(e.target.value)} multiline rows={15} placeholder='내용을 입력해주세요!'
              style={{width: "100%", minHeight: "50%", marginBottom:"10px"}} InputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
            />  
            {/* <TextareaAutosize name="grt_contents" value={grt_contents} onChange={e => setGrt_contents(e.target.value)}  placeholder='내용을 입력해주세요!'
              style={{width: "100%", minHeight: "50%", fontSize:"10px"}}
            /> */}
        {/* footer */}
          <div style={{textAlign: 'right', minHeight: "10%"}}>
            <TextField required variant="standard" name="grt_from" value={grt_from} onChange={e => setGrt_from(e.target.value)} placeholder='이름을 입력해주세요!'
            style={{width: "50%"}} InputProps={{ style: { fontSize: 13 } }}
            InputLabelProps={{ style: { fontSize: 13 } }}/>
            <span>로부터</span>
          </div>

          <div style={{textAlign: 'center', minHeight: "10%"}}>
            <Button className='button brown'  type="submit">덕담 보내기</Button>
          </div>
      </form>
          </DialogContent>
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
