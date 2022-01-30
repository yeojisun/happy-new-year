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
.button {
    display: inline-block;
    text-shadow: 0 0 2px rgba(0,0,0,.3);
    font-family: sans-serif;
    box-shadow:
        inset 0 0 2px 0 rgba(255,255,255,.4),
        inset 0 0 3px 0 rgba(0,0,0,.4),
        inset 0 0 3px 5px rgba(0,0,0,.05),
        2px 2px 4px 0 rgba(0,0,0,.25);
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 12px;
    line-height: 14px;
    position: relative;
    cursor:pointer;
}
   .button.brown { background: brown; color: #fff;}
.button:before {
    top: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: rgba(255,255,255,.6);
    box-shadow: 0 1px 2px 0 rgba(255,255,255,.6);
}
.button:after {
    bottom: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background: rgba(0,0,0,.15);
    box-shadow: 0 -1px 2px 0 rgba(0,0,0,.15);
}
.form{
    height:100%
}
`;
export default ViewStyled;


