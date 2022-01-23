import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import firebase from '../../firebase';
import { getFirestore, collection, query, orderBy, getDocs } from "firebase/firestore";

import Slider from "react-slick";

import Styled from "./Styled";
import View from "./View";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function List() {
    const [cards, setCard] = useState([]);
    const fetchCard = async () => {
        const database = getFirestore(firebase);  //정보가 올바르면 아래 파이어스토어 접근
        const q = query(collection(database, "users/SUE3vmEn1CixjZiBBxZZ/greetings"), orderBy("grt_date"))
        getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setCard(cards => [...cards, { ...doc.data(), id: doc.id }]);

            })
        })
    }

    useEffect(() => {
        fetchCard();
    }, []);

    const settings = {
        dots: true
        , infinite: false
        , speed: 500
        , slidesPerRow: 3
        , rows: 3
        , arrows: false

    };



    const { id } = useParams();


    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState({});

    const handleClickOpen = (value) => {
        setOpen(true);
        setSelectedValue(value);
    };

    const handleClose = (value) => {
        setOpen(false);
        // setSelectedValue(value);
    };

    return (
        <>
            <Styled>
                <div className='frame'>
                    <main className='main-frame'>
                        <div className="list_title"><img src="/assets/img/sub_title.png" width="350px" alt="" /></div>
                        {/* <div className="user_title">
                            <div className="user_text">{id}님의 덕담보따리</div></div> */}
                        <div class="user-wrap">
                            <div class="user-image"><img src="/assets/img/sub_card.png" alt="" /></div>
                            <div class="user-text">
                                <div class="user-text-table">
                                    <div class="user-text-table-row">
                                        <div class="user-text-table-cell">
                                            <p>{id}님의 덕담보따리</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Slider {...settings}>
                            {// <Card key={c.id} onClick={() => { handleClickOpen(c) }}>

                                cards.map(c => {
                                    return (
                                        <div key={c.id} className="list-item" style={{ width: 80 }} onClick={() => { handleClickOpen(c) }}>
                                            <img src="/assets/img/bottari.png" style={{ width: 80, height: 100 }} alt="" />
                                            §{c.grt_user_id}로부터§
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                        <div className='div_button'>
                            <a className='button red' href="/">덕담 남기기</a>
                        </div>

                    </main>
                </div>
            </Styled>

            <View
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </>
    );
}
export default List;
