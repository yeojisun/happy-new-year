import styled from "styled-components";

const Styled = styled.div`

.title { 
    display: flex; 
    -- text-align:center;
    justify-content: center; 
    padding: 20px 0 20px 0; 
    margin-bottom: 600px; 
    font-family: 'ChosunGs';
    font-size: 40px;
     }
     @font-face {
    font-family: 'ChosunGs';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGs.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

background-image: url("/assets/img/bg.jpg");
background-size: 600px 800px;
background-repeat: no-repeat ;
background-position: top center; 
min-height: 100vh;
`;

export default Styled;
