
import { DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import * as common from '../../CommonFunction';

import PropTypes from 'prop-types';
import InsertForm from "./InsertForm";

import Styled from "./ViewStyled";
function View(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleItemClick = (value) => {
    onClose(value);
  };

if(selectedValue != null && "VIEW" !== selectedValue.type) {
  return (
    <Styled onClose={handleClose} open={open}
      PaperProps={{
        style: {
          backgroundImage: `url("/assets/img/${selectedValue.grt_img}.png")`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: 'transparent',
          width: "55vh",
          height: "100vh"
        },
      }}>
      <DialogTitle>{selectedValue.grt_title}  <IconButton aria-label="close" id="btn_close" onClick={() => handleItemClick()}><CloseIcon />
      </IconButton></DialogTitle>
      <DialogContent>{selectedValue.grt_contents}</DialogContent>
      <DialogContent id="dcnt_from">{selectedValue.grt_date !== null ? selectedValue.grt_date && common.timestamp(selectedValue.grt_date.toDate()) : null} {selectedValue.grt_user_id}로부터</DialogContent>
    </Styled>
  );
  } else {
    return (
      <Styled onClose={handleClose} open={open}
        PaperProps={{
          style: {
            backgroundImage: `url("/assets/img/${selectedValue.grt_img}.png")`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'transparent',
            width: "55vh",
            height: "100vh"
          },
        }}>
        <DialogTitle><IconButton aria-label="close" id="btn_close" onClick={() => handleItemClick()}><CloseIcon />
        </IconButton></DialogTitle>
      </Styled>
    );
  }

}

export default View;

View.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};