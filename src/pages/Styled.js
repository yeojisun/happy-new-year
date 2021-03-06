import styled from "styled-components";

const Styled = styled.div`
.frame{
    height:100vh;
}
.main-frame{
    min-height: 100%;
    max-width: 600px;
    margin: 0 auto;
}
.title { 
    display: flex; 
    -- text-align:center;
    justify-content: center; 
    padding: 200px 0 20px 0; 
    font-family: 'ChosunGs';
    font-size: 30px;
    color:#FFFFFF;
    text-shadow: 2px 2px 10px red;
     }
     @font-face {
    font-family: 'ChosunGs';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGs.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
.button{
    padding: 35vh 0 30vh 0; 

}
text-align:center;
background-image: url("/assets/img/main_bg.png");
background-size: 400px;
-- background-repeat: no-repeat ;
background-position: top center; 
width:100vw;
min-height:100%;
`;

export default Styled;
