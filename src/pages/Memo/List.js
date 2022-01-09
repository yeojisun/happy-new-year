import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import firebase from '../../firebase';
import { getFirestore, collection, query, getDocs } from "firebase/firestore";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

import Slider from "react-slick";

import Styled from "./Styled";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from './bg.jpg'; // Import using relative path
function List() {
    const [cards, setCard] = useState([]);
    const fetchCard = async () => {
        const database = getFirestore(firebase);  //정보가 올바르면 아래 파이어스토어 접근
        const q = query(collection(database, "users/SUE3vmEn1CixjZiBBxZZ/greetings"))
        getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setCard(cards => [...cards, doc.data()])
            })
        })
    }
    useEffect(() => {
        fetchCard();
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        rows: 3,
        slidesToScroll: 3
    };



    const styles = {
        paperContainer: {
            backgroundImage: `url(${Image})`
        }
    };

    const { id } = useParams();
    return (
        <>
            <div>{id}님의 덕담보따1리</div>
            <Styled>
                <Slider {...settings}>
                    {
                        cards.map(c => {
                            return (
                                <Card sx={{ maxWidth: 200 }}>
                                    <CardActionArea>
                                        <CardContent style={styles.paperContainer}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {c.grt_title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {c.grt_contents}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            )
                        })
                    }
                </Slider>
            </Styled>


        </>
    );
}
export default List;
