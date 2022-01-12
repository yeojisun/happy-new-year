import { useParams } from "react-router-dom";
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
    const [cards, setCard] = useState([]);
    const fetchCard = async () => {
        const database = getFirestore(firebase);  //정보가 올바르면 아래 파이어스토어 접근
        const q = query(collection(database, "users/SUE3vmEn1CixjZiBBxZZ/greetings"), orderBy("grt_date"))
        getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setCard(cards => [...cards, {...doc.data(), id: doc.id}]);

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
    };



    const { id } = useParams();

    
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("test");

  const handleClickOpen = (value) => {
    setOpen(true);
    setSelectedValue(value);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

    return (
        <>
            <div>{id}님의 덕담보따리</div>
            <Styled>
                <Slider {...settings}>
                    {
                        cards.map(c => {
                            return (
                                <Card key={c.id} onClick={()=>{handleClickOpen(c.grt_title)}}>
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
                            )
                        })
                    }
                </Slider>
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
