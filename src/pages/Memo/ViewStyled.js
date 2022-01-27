import { Dialog } from "@mui/material";
import styled from "styled-components";

const ViewStyled = styled(Dialog)`
#btn_close {
    position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
}
@media ( max-width: 480px ) {
    #btn_close {
        position: absolute;
        top: 0px;
        right: 0;
        padding: 40px 20px 0 0 ;
    }
}
.dialog_text{
    font-family: 'ChosunGs';
    color:brown;
    text-shadow: 2px 2px 10px yellow;
}
@font-face {
    font-family: 'ChosunGs';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGs.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
#dcnt_from{
    position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px;
}
@media ( max-width: 480px ) {
    #dcnt_from {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 30px;
    }
}
`;
export default ViewStyled;


