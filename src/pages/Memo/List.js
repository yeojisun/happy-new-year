
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import firebase from '../../firebase';
import { getFirestore, collection, query, getDocs } from "firebase/firestore";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


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

    const { id } = useParams();
    return (
        <>
            <div>{id}님의 덕담보따리</div>

            {
                cards.map(c => {
                    return (
                        <Card sx={{ maxWidth: 100 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
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

        </>
    );
}
export default List;
