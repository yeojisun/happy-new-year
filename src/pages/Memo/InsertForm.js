import React, { useState } from 'react';
import firebase from '../../firebase';
import { getFirestore, ref, set, collection, query, orderBy, getDocs, terminate } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { isEmpty } from '@firebase/util';

const InsertForm = (props) => {
    // 본문 영역
    const [contents, setContents] = useState("");
    const handleChangeContnets = (e) => {
        setContents(e.currentTarget.value);
    };

    // id
    const { id } = useParams();

    // 등록
    const actInsert = (e) => {
        // 공백체크
        if(contents.trim() == null || isEmpty(contents.trim())) {
            alert("하고싶은 말을 입력하세요.");
            setContents("");
            return;
        }
   
        // 등록
        // const database = getFirestore(firebase);
        // set(ref(database, 'users/' + id + '/greetings'), {
        //     username: name,
        //     email: email,
        //     profile_picture : imageUrl
        // });

        // 모달 닫기
        props.closeFunction();
    };

    return (
        <div>
            <textarea name="contents" value={contents} onChange={handleChangeContnets} />
            <button onClick={actInsert}>등록</button>
        </div>
    );
}

export default InsertForm;