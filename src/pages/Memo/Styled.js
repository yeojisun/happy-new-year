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
.slick-next:before, .slick-prev:before {
    color: #000;
}

.card_content {
    
    font-family: 'ChosunGs';
    font-size: 40px;
     }
     @font-face {
    font-family: 'ChosunGs';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGs.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;
export default Styled;


