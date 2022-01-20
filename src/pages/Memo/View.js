import {DialogTitle,DialogContent, Dialog, Button} from '@mui/material';
import * as common from '../../CommonFunction';
import PropTypes from 'prop-types';

function View(props) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  
  const handleItemClick = (value) => {
    onClose(value);
  };
  
  if(selectedValue != null && "NEW" !== selectedValue.type) {
    return (
      <Dialog onClose={handleClose} open={open} PaperProps={{
        style: {
          backgroundImage:`url("/assets/img/${selectedValue.grt_img}.jpg")`,  
        },
      }}>
        <DialogTitle>{selectedValue.type}</DialogTitle>
        {/* <DialogContent>{selectedValue.grt_contents}</DialogContent>
        <DialogContent>{selectedValue.grt_date !== null ? common.timestamp(selectedValue.grt_date.toDate()) : null} {selectedValue.grt_user_id}로부터</DialogContent> */}
        <Button onClick={()=> handleItemClick()}>닫기</Button>
      </Dialog>
    );

  } else {
    return (
      <Dialog onClose={handleClose} open={open} PaperProps={{
        style: {
          backgroundImage:`url("/assets/img/${selectedValue.grt_img}.jpg")`,  
        },
      }}>
        <DialogTitle>{selectedValue.type}</DialogTitle>
        <Button onClick={()=> handleItemClick()}>닫기</Button>
      </Dialog>
    );
  }
}

export default View;

View.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
