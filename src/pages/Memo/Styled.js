import styled from "styled-components";

const Styled = styled.div`

.frame{
    height:100vh;
}
.main-frame{
    min-height: 100%;
    max-width: 350px;
    margin: 0 auto;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
.list-item img{
    
  height: calc(50vh - 100px);
  width: auto;
  margin: 0 auto; /* it centers any block level element */
}
.list_title{
    padding-top:30px;
    padding-bottom:10px;
}
.user_title{
    font-size: 20px;
    font-family: 'ypseo';
    text-align:center;
    padding-top:30px;
    padding-bottom:10px;
    background-image: url("/assets/img/sub_card.png");  background-size: 350px;
    background-repeat: no-repeat;
 }   
@font-face {
    font-family: 'ypseo';
    src: url('/assets/font/ypseo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

background-image: url("/assets/img/sub_bg.jpg");
background-size: 400px;
-- background-repeat: no-repeat ;
background-position: top center; 
width:100vw;
min-height:100%;
`;
export default Styled;


