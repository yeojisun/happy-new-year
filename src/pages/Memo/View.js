import {DialogTitle, Dialog, Button} from '@mui/material';
import PropTypes from 'prop-types';

function View(props) {
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleItemClick = (value) => {
      onClose(value);
    };
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{selectedValue}</DialogTitle>
        <Button onClick={()=> handleItemClick()}>꺼벌여</Button>
      </Dialog>
    );

    
  }
  
export default View;

View.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
