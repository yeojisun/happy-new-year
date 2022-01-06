import React from 'react';
import Header from '../components/Header';
import Styled from "./Styled";

function MainPage() {
    return (
        <Styled>
            <Header />

            <div className="title">2022 <br /> 새해 덕담을 주고받아보아요</div>
            <div>시작하기</div>
        </Styled>
    );
}
export default MainPage;
