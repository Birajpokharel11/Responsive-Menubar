/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Paper, Typography } from '@material-ui/core';
import HeroYatch from './HeroYatch.png';
import Checkin from './checkin/Checkin';
import FavoriteIcon from '@material-ui/icons/Favorite';
import clsx from 'clsx';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      background: '#F7F7F7',
      height: '122px'
    },
    Yatch: {
      MaxWidth: '100%',
      height: '22rem'
    },
    CheckIn: {
      height: '132px',
      width: '100%',
      backgroundColor: '#071529',
      paddingLeft: '100px',
      display: 'flex',
      alignItems: 'center'
    },
    Typography: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '24px',
      color: ' #FFFFFF'
    },
    margin: {
      width: '190px',
      height: '52px',
      borderRadius: '4px',
      textTransform: 'none'
    },
    enquire: {
      border: '1px solid #FFFFFF',
      color: 'white'
    },
    Book: { background: ' rgba(245, 240, 228, 1)', color: '#2A398D' },
    MiddleText: {
      fontWeight: '600'
    }
  })
);

export function Offer() {
  const classes = useStyles();

  return (
    <div>
      <img src={HeroYatch} alt="HeroYatch" className={classes.Yatch} />
      <Paper className={classes.CheckIn} square>
        <Checkin />
        <Typography className={classes.Typography}>
          From{' '}
          <span className={clsx(classes.Typography, classes.MiddleText)}>
            €135.000
          </span>{' '}
          to{' '}
          <span className={clsx(classes.Typography, classes.MiddleText)}>
            {' '}
            €145.000
          </span>
        </Typography>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexGrow: 1
          }}
        >
          <FavoriteIcon style={{ color: 'White' }} />
          <Button
            variant="outlined"
            size="large"
            color="primary"
            className={clsx(classes.margin, classes.enquire)}
          >
            Enquire
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            className={clsx(classes.margin, classes.Book)}
          >
            Book Now
          </Button>
        </div>
      </Paper>
    </div>
  );
}
