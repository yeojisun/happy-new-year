import React from 'react';
//import Header from '../components/Header';
import Styled from "./Styled";
// import { Button } from '@mui/material';


import Auth from "./auth";

function MainPage() {
    return (
        <Styled>
            <div className='frame'>
                <main className='main-frame'>
                    <div className="title">2022 <br /> 새해 덕담을 주고받아보아요</div>
                    {/* <div className="button">
                        <Button variant="contained">로그인 하기</Button>
                    </div> */}
                    <Auth/>
                </main>
            </div>
        </Styled>
    );
}
export default MainPage;

