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
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
  Box: {
    display: 'none',
    border: '3px dashed #AB3996',
    boxSizing: 'border-box',
    width: '230px',
    background: '#f6f6f6',
    minHeight: '155px',
    position: 'fixed',
    top: '70%',
    left: '10%',
    zIndex: '1',
    [theme.breakpoints.down(450)]: {
      display: 'none'
    }
  },
  timetext: {
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#2A398D',
    textAlign: 'center'
  }
}));
function ScrollSpecialOffer() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 150
  });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('450'));
  const classes = useStyles();
  return (
    <div>
      {trigger && (
        <Box style={{ position: 'relative' }}>
          <Box className={classes.Box}>
            <Box
              pt={2}
              pb={2}
              pr={1}
              pl={1}
              display="flex"
              justifyContent="space-around"
            >
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
            </Box>
            <Box pl={2}>
              <Dialouge />
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
}

export default ScrollSpecialOffer;
