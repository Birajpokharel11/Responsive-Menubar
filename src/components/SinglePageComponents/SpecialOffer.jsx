import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography
} from '@material-ui/core';
import Vector from './SpecialOfferPic/Vector.svg';
import Dialouge from './Dialouge';
const useStyles = makeStyles((theme) => ({
  initialBox: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    minheight: '122px'
  },
  Image: {
    minHeight: '120px',
    minWidth: '100px',
    paddingRight: '20px'
  },
  Typography: {
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '26px',
    lineHeight: '31px',
    lineSpacing: '0.1em',
    color: '#2A398D',
    textTransform: 'uppercase'
  },
  timestamp: {
    border: '3px dashed #AB3996',
    boxSizing: 'border-box',
    width: '454px',
    minHeight: '92px',
    display: 'flex',
    justifyContent: 'space-around'
  },
  timetext: {
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#2A398D'
  },
  ButtonTypo: {
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '23px',
    color: 'white'
  }
}));

function SpecialOffer() {
  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const classes = useStyles();
  return (
    <Box pb={0} className={classes.initialBox}>
      <Box pt={2} display="flex" alignItems="center">
        <Box pt={1}>
          <img src={Vector} className={classes.Image} alt="vector" />
        </Box>
        <Grid />
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item md style={{ textAlign: 'justify' }}>
            <Typography className={classes.Typography}>
              There wıll be a special offer text here!
            </Typography>
          </Grid>
          <Grid item md container alignItems="center" justifyContent="center">
            <Box pt={1.5} className={classes.timestamp}>
              <Typography className={classes.timetext}>
                <span style={{ fontWeight: '600' }}>3</span>
                <br />
                Days
              </Typography>
              <Typography className={classes.timetext}>
                <span style={{ fontWeight: '600' }}>3</span>
                <br />
                Hours
              </Typography>
              <Typography className={classes.timetext}>
                <span style={{ fontWeight: '600' }}>3</span>
                <br />
                Minutes
              </Typography>
              <Dialouge />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SpecialOffer;
