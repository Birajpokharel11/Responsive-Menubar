/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Container, Grid, Typography } from '@material-ui/core';
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
    ImageTextPositioner: {
      position: 'relative'
    },
    Yatch: {
      width: ' 100%',
      height: ' 671px'
    },

    CheckIn: {
      height: '132px',
      width: '100vw',
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
      minWidth: '190px',
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
    },
    Container: {
      padding: '0%',
      position: 'relative'
    },
    ImageText: {
      position: 'absolute',
      left: '4.94%',
      top: '62%',

      fontFamily: ' Lato',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: ' 60px',
      color: '#FFFFFF'
    },
    ImageText2: {
      position: 'absolute',
      left: '4.94%',
      top: '72.23%',
      fontFamily: ' Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: ' 24px',
      color: '#FFFFFF'
    }
  })
);

export function Offer() {
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.Container}>
      <img src={HeroYatch} alt="HeroYatch" className={classes.Yatch} />
      <Typography className={classes.ImageText}>ARESTEAS</Typography>
      <Typography className={classes.ImageText2}>
        166m | Motor Yacht | 10 Guests
      </Typography>
      <Container maxWidth={false} className={classes.CheckIn}>
        <Grid
          container
          spacing={2}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Grid
            item
            container
            md={8}
            style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}
          >
            <Grid
              item
              style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <Checkin />
              <Checkin />
            </Grid>
            <Grid item>
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
            </Grid>
          </Grid>

          <Grid
            item
            container
            md={4}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <Grid>
              {' '}
              <FavoriteIcon style={{ color: 'White' }} />
            </Grid>
            <Grid>
              {' '}
              <Button
                variant="outlined"
                size="large"
                label="Enquire"
                color="primary"
                className={clsx(classes.margin, classes.enquire)}
              >
                Enquire
              </Button>
            </Grid>
            <Grid>
              {' '}
              <Button
                variant="outlined"
                size="large"
                color="primary"
                className={clsx(classes.margin, classes.Book)}
              >
                Book Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
