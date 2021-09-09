import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import Vector from './SpecialOfferPic/Vector.svg';
import Dialouge from './Dialouge';
import { RotateRightTwoTone } from '@material-ui/icons';
import ScrollSpecialOffer from './ScrollSpecialOffer';
import MobileDialouge from './MobileDialouge';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  initialBox: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: '158px',
    posiition: 'relative'
  },
  Image: {
    minHeight: '120px',
    minWidth: '100px',
    posiition: 'absolute',
    [theme.breakpoints.down('655')]: {
      width: '232px',
      height: '269px',
      transform: 'rotate(360)'
    }
  },
  Typography: {
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '26px',
    lineHeight: '31px',
    lineSpacing: '0.1em',
    color: '#2A398D',
    textTransform: 'uppercase',
    [theme.breakpoints.down('900')]: {
      fontSize: '24px',
      lineHeight: '20px',
      textAlign: 'center'
    },
    [theme.breakpoints.down('655')]: {
      fontSize: '18px',
      lineHeight: '22px',
      textAlign: 'center',
      paddingBottom: '16px'
    }
  },
  timeStamp: {
    border: '3px dashed #AB3996',
    boxSizing: 'border-box',
    width: '454px',
    minHeight: '92px',
    display: 'flex',
    justifyContent: 'space-around',
    background: '#F6F6F6',
    [theme.breakpoints.down('md')]: {
      width: '454px',
      height: ' 80px'
    },
    [theme.breakpoints.down('450')]: {
      width: '343px',
      height: ' 80px',
      position: 'fixed',
      zIndex: '1'
    },
    [theme.breakpoints.down('330')]: {
      maxWidth: '303px'
    }
  },
  timetext: {
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '23px',
    color: '#2A398D',
    textAlign: 'center'
  },

  ButtonTypo: {
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '23px',
    color: 'white'
  },
  Box2: {
    [theme.breakpoints.down('655')]: {
      position: 'absolute',
      left: '10%'
    },
    [theme.breakpoints.down('380')]: {
      position: 'absolute',
      left: '4%'
    }
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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('900'));
  const mobile = useMediaQuery(theme.breakpoints.down('655'));
  return (
    <Box pb={0} display="flex" className={classes.initialBox}>
      <img src={Vector} className={classes.Image} alt="vector" />
      <Box
        pt={2}
        display={mobile ? 'block' : 'flex'}
        alignItems="center"
        className={classes.Box2}
      >
        <Typography className={classes.Typography}>
          {matches
            ? 'Special Offer Text Here!'
            : 'There wıll be a special offer text here!'}
        </Typography>{' '}
        <Box pt={2} pb={2} pr={1} pl={1} className={classes.timeStamp}>
          <Typography className={classes.timetext}>
            <span style={{ fontWeight: '600' }}>3</span>
            <br />
            Days
          </Typography>
          <Typography className={classes.timetext}>
            <span style={{ fontWeight: '600' }}>20</span>
            <br />
            Hours
          </Typography>
          <Typography className={classes.timetext}>
            <span style={{ fontWeight: '600' }}>36</span>
            <br />
            Minutes
          </Typography>
          {mobile ? <MobileDialouge /> : <Dialouge />}
        </Box>
      </Box>
    </Box>
  );
}

export default SpecialOffer;
