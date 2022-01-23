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


