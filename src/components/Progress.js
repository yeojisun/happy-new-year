import React from 'react'
import {Box, Fade, CircularProgress} from '@mui/material/';
import { makeStyles, createStyles } from '@material-ui/styles';
 
const useStyles = makeStyles(() =>
  createStyles({
    circle: {
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 9999,
    },
  }),
);
 
const Progress = (props) => {
  const classes = useStyles({});
  return (
    <div className={classes.circle} >
    <Fade in={props.isFade} >
        <Box sx={{ boxShadow: 3, backgroundColor:'white' }}>
            <CircularProgress
                color="error"  />
        </Box>
    </Fade>
    </div>
  )
}
 
export default Progress