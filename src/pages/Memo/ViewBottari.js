
import { DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import * as common from '../../CommonFunction';

import PropTypes from 'prop-types';
// import InsertForm from "./InsertForm";

import Styled from "./ViewStyled";
function ViewBottari(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleItemClick = (value) => {
    onClose(value);
  };


  // 상세화면
  return (
    <Styled onClose={handleClose} open={open}
      PaperProps={{
        style: {
          backgroundImage: `url("/assets/img/${selectedValue.grt_img}.png")`,
          backgroundSize: '100% 100%',//'cover',//'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: 'transparent',
          width: "55vh",
          height: "100vh"
        },
      }}>
      <DialogTitle className="dialog_text">{selectedValue.grt_title}  <IconButton aria-label="close" id="btn_close" onClick={() => handleItemClick()}><CloseIcon />
      </IconButton></DialogTitle>
      <DialogContent className="dialog_text">{selectedValue.grt_contents}</DialogContent>
      <DialogContent className="dialog_text" id="dcnt_from">{selectedValue.grt_date !== null ? selectedValue.grt_date && common.timestamp(selectedValue.grt_date.toDate()) : null} {selectedValue.grt_from}(으)로부터</DialogContent>
    </Styled>
  );
}

export default ViewBottari;

ViewBottari.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};