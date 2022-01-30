import { useLocation, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from "react-helmet-async";
//import Fade from '@mui/material/Fade';
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

    // useEffect(() => {
    //     //window.location.reload(); 
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [addopen]);

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
        console.log("닫았다");
        // setSelectedValue(value);

        window.location.reload();
    };
    const linkCopy = () => {

        var url = '';
        var textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        url = window.document.location.href;
        textarea.value = url;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("URL이 복사되었습니다.")
    }

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    {/* title 정보 */}
                    <meta property="og:title" content={nickName} 님의 덕담보따리 />
                </Helmet>
            </HelmetProvider>
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
                                        <div key={c.id} className="bottari-list" style={{ width: 80 }} onClick={() => {
                                            if (chkLogin)
                                                handleClickOpen(c, "VIEW");
                                            else
                                                console.log('클릭않되요');
                                        }}>
                                            <img src="/assets/img/bottari.png" style={{ width: 80, height: 100 }} alt="" />
                                            <p className="bottari-text">§{c.grt_from}로부터§</p>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                        <div className='div_center div_button'>
                            {chkLogin ?
                                <div className='button yellow' onClick={() => { linkCopy() }}>링크 공유하기</div>
                                : <div className='button red' onClick={() => { handleClickOpen(null, "NEW") }}>덕담 남기기</div>}
                        </div>

                        <div className='div_center'>
                            <a href="https://yeossi.notion.site/happy-summer-95e3afc6e9e54d7ba5fc7b9682cac07c" target="_blank" rel="noreferrer" >※누가 맨들었나 보고 싶지 않냐잉※</a>
                        </div>
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
