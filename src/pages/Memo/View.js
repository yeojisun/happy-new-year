import { DialogTitle, DialogContent, Dialog, Button } from '@mui/material';
import * as common from '../../CommonFunction';
import PropTypes from 'prop-types';
import InsertForm from "./InsertForm";

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
      <Dialog onClose={handleClose} open={open} PaperProps={{
        style: {
          backgroundImage: `url("/assets/img/${selectedValue.grt_img}.jpg")`,
          minWidth: "500px",
          width: "30%",
          height: "100%"
        },
      }}>
        <DialogTitle>{selectedValue.grt_title}</DialogTitle>
        <DialogContent>
          <InsertForm closeFunction={handleClose} />
        </DialogContent>
        <Button onClick={() => handleItemClick()}>닫기</Button>
      </Dialog>
    );

  } else {
    return (
      <Dialog onClose={handleClose} open={open} PaperProps={{
        style: {
          backgroundImage: `url("/assets/img/${selectedValue.grt_img}.jpg")`,
          width: "30%",
          height: "100%"
        },
      }}>
        <DialogTitle>{selectedValue.grt_title}</DialogTitle>
        <DialogContent>{selectedValue.grt_contents}</DialogContent>
        <DialogContent>{selectedValue.grt_date !== null ? selectedValue.grt_date && common.timestamp(selectedValue.grt_date.toDate()) : null} {selectedValue.grt_user_id}로부터</DialogContent>
        <Button onClick={() => handleItemClick()}>닫기</Button>
      </Dialog>
    );
  }

}

export default View;

View.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
