import { useLocation, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Fade from '@mui/material/Fade';
import { getFirestore, collection, query, orderBy, getDocs, getDoc, doc } from "firebase/firestore";


import Slider from "react-slick";
import Styled from "./Styled";

import firebase from '../../firebase';
import ViewBottari from "./ViewBottari";
import AddBottari from "./AddBottari";
import Progress from "../../components/Progress";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function List() {
    // 사용자 정보
    const { id } = useParams();
    //const nickName = useLocation().state.nickName;
    const location = useLocation();
    let chkLogin = location.state !== null ? true : false; // 로그인 체크 : true면 덕담남기기 hide, false면 덕담남기기 버튼 view

    // 덕담 정보
    const [bottari, setBottari] = useState([]);
    const [nickName, setNickName] = useState();
    const [isNickLoading, setNickLoading] = useState(true);
    const [isBotLoading, setBotLoading] = useState(true);
    const database = getFirestore(firebase); // firestore 접근
    const docRef = doc(database, 'users', id);
    const getNickName = async () => {
        
        const docSnap = await getDoc(docRef);
        setNickName(docSnap.data().user_name);
        setNickLoading(false);
    }
    const fetchBottari = async () => {
        const q = query(collection(database, `users/${id}/greetings`), orderBy("grt_date"));
        getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setBottari(bottari => [...bottari, { ...doc.data(), id: doc.id }]);
            })
        })
        setBotLoading(false);

    }
    useEffect(() => {
        getNickName();
        
        fetchBottari();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const slickSettings = {
        dots: true
        , infinite: false
        , speed: 500
        , slidesPerRow: 3
        , rows: 3
        , arrows: false
    };

    // dialog state
    const [viewopen, setViewOpen] = React.useState(false);
    const [addopen, setAddOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState({});

    // open dialog
    const handleClickOpen = (pValue, pType, e) => {
        // console.log("dialog value>> ", value);
        if (pType === "NEW") { 
            // 등록 View
            console.log("등록");
            setAddOpen(true);

        } else {
            // 상세 View
            console.log("상세");

            setViewOpen(true);
            setSelectedValue(pValue);
        }
    };
    // close dialog
    const handleViewClose = (value) => {
        setViewOpen(false);
        // setSelectedValue(value);
    };
    const handleAddClose = (value) => {
        setAddOpen(false);
        // setSelectedValue(value);
    };

    return (
        <>
            <Styled>
                <div className='frame'>
                    <main className='main-frame'>
                        <div className="list_title"><img src="/assets/img/sub_title.png" width="350px" alt="" /></div>
                        <div className="user-wrap">
                            <div className="user-image"><img src="/assets/img/sub_card.png" alt="" /></div>
                            <div className="user-text">
                                <p>{nickName}님의 덕담보따리</p>
                            </div>
                        </div>
                        <Slider {...slickSettings}>
                            {

                        bottari.map(c => {
                                    return (
                                        <div key={c.id} className="list-item" style={{ width: 80 }} onClick={() => { handleClickOpen(c, "VIEW") }}>
                                            <img src="/assets/img/bottari.png" style={{ width: 80, height: 100 }} alt="" />
                                            §{c.grt_from}로부터§
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                        <Fade in={!chkLogin}>
                        <div className='div_button'>
                            <div className='button red' onClick={() => { handleClickOpen(null, "NEW") }}>덕담 남기기</div>
                        </div>
                        </Fade>
                        <Progress isFade={isBotLoading || isNickLoading} />
                       
                    </main>
                </div>
            </Styled>
            <ViewBottari
                selectedValue={selectedValue}
                open={viewopen}
                onClose={handleViewClose}
            />
           <AddBottari
                selectedValue={selectedValue}
                open={addopen}
                user_id={id}
                onClose={handleAddClose}
            />
        </>
    );
}

export default List;
