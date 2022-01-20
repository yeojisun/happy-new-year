import { useParams, useLocation  } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import firebase from '../../firebase';
import * as common from '../../CommonFunction';
import { getFirestore, collection, query, orderBy, getDocs } from "firebase/firestore";

import { CardActionArea, Typography, CardContent, Card } from '@mui/material';

import Slider from "react-slick";

import Styled from "./Styled";
import View from "./View";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function List() {
    // 사용자 정보
    const { id } = useParams();
    const nickName = useLocation().state.nickName;
    // 덕담 정보
    const [cards, setCard] = useState([]);

    const fetchCard = async () => {
        const database = getFirestore(firebase);  //정보가 올바르면 아래 파이어스토어 접근
        const q = query(collection(database, "users/SUE3vmEn1CixjZiBBxZZ/greetings"), orderBy("grt_date"))
        // const q = query(collection(database, `users/${id}/greetings`), orderBy("grt_date"));
        getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setCard(cards => [...cards, {...doc.data(), id: doc.id}]);
            })
        })
    }
    
    useEffect(() => {
        fetchCard();
        console.log("card>> ", cards);
    }, []);

    const settings = {
        dots: true
        , infinite: false
        , speed: 500
        , slidesPerRow: 3
        , rows: 3
		, arrows: false
    };
    
    // dialog state
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState({});
    
    // open dialog
    const handleClickOpen = (value, e) => {
        console.log("dialog value>> ", value);
        if(value != null && "NEW" === value.type) {
            // 등록 View
            console.log("등록");
        
        } else {
            // 상세 View
            console.log("상세");
        
        }
        
        setOpen(true);
        setSelectedValue(value);

        // return (
        //     <View
        //     selectedValue={selectedValue}
        //     open={open}
        //     onClose={handleClose}
        // />
        // );
    };
    // close dialog
    const handleClose = (value) => {
        setOpen(false);
        // setSelectedValue(value);
    };

    return (
        <>
        <Styled>
            <div className='frame'>
                <main className='main-frame'>
                    <div>{nickName}님의 덕담보따리</div>
                    <div>
                        <button onClick={() => handleClickOpen({type : 'NEW'})}>등록</button>
                    </div>
                
                    <Slider {...settings}>
                        {
                            cards.map(c => {
                                c.type = "VIEW";

                                return (
                                    <Card
                                        key={c} 
                                        onClick={() => handleClickOpen(c)} // TODO: 클릭 없이 페이지 랜더링 후 onclick 실행되는 문제 있음
                                    >
                                        <CardActionArea>
                                            <CardContent className="card_content" sx={{backgroundImage: `url('/assets/img/${c.grt_img}.jpg')`}}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {c.grt_title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {c.grt_contents}
                                                </Typography>
                                                <Typography variant="caption" color="text.secondary">
                                                    {c.grt_date !== null ? common.timestamp(c.grt_date.toDate()) : null}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                );
                            })
                        }
                    </Slider>
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
