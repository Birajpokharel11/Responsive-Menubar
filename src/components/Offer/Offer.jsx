/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Button,
  Container,
  Grid,
  Typography,
  IconButton
} from '@material-ui/core';
import HeroYatch from './HeroYatch.svg';
import Checkin from './checkin/Checkin';
import FavoriteIcon from '@material-ui/icons/Favorite';
import clsx from 'clsx';
import Main from './checkin/Main';
import { Description } from '../SinglePageComponents/Description';
import Gallery from '../SinglePageComponents/Gallery';
import ImageSlider from '../SinglePageComponents/ImageSlider';
import Accomodation from '../SinglePageComponents/Accomodation';
import YatchServices from '../SinglePageComponents/YatchServices';
import Destinations from '../SinglePageComponents/Destinations';
import Reviews from '../SinglePageComponents/Reviews';
import Enquire from '../SinglePageComponents/Enquire';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      background: '#F7F7F7',
      height: '122px'
    },
    Yatch: {
      width: ' 100%',
      display: 'block',
      height: ' 671px',
      objectFit: 'cover'
    },

    CheckIn: {
      minHeight: '132px',
      width: '100vw',
      backgroundColor: '#071529',
      padding: '3%',
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

    ImageTextFont: {
      fontFamily: ' Lato',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: ' 60px',
      color: '#FFFFFF',
      [theme.breakpoints.down('435')]: {
        fontSize: '32px'
      }
    },
    ImageTextPosition: {
      position: 'absolute',
      left: '4.94%',
      top: '62%',
      [theme.breakpoints.down('435')]: {
        marginTop: '50px'
      }
    },
    borderShadow: {},
    ImageText2Font: {
      fontFamily: ' Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: ' 24px',
      color: '#FFFFFF',
      [theme.breakpoints.down('435')]: {
        fontSize: '16px'
      }
    },
    ImageText2Position: {
      position: 'absolute',
      marginTop: '90px',
      left: '4.94%',
      [theme.breakpoints.down('435')]: {
        marginTop: '100px'
      }
    },
    imageTextShadows: {
      position: 'absolute',
      top: '45.47%',
      width: '100%',
      [theme.breakpoints.down('445')]: {
        height: '210px',
        background:
          'linear-gradient(358.02deg, #091527 1.48%, rgba(9, 21, 39, 0.914539) 37.02%, rgba(9, 21, 39, 0.291523) 72.12%, rgba(9, 21, 39, 0) 83.12%)'
      },
      [theme.breakpoints.down('435')]: {
        height: '210px',
        background:
          'linear-gradient(358.02deg, #091527 1.48%, rgba(9, 21, 39, 0.914539) 37.02%, rgba(9, 21, 39, 0.291523) 72.12%, rgba(9, 21, 39, 0) 83.12%)',
        position: 'absolute',
        top: '46.47%'
      },
      [theme.breakpoints.down('380')]: {
        height: '210px',
        background:
          'linear-gradient(358.02deg, #091527 1.48%, rgba(9, 21, 39, 0.914539) 37.02%, rgba(9, 21, 39, 0.291523) 72.12%, rgba(9, 21, 39, 0) 83.12%)',
        position: 'absolute',
        top: '47.09%'
      },
      [theme.breakpoints.down('325')]: {
        top: '44.95%'
      }
    }
  })
);

export function Offer() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth={false} className={classes.Container}>
        <img src={HeroYatch} alt="HeroYatch" className={classes.Yatch} />
        <div className={classes.imageTextShadows}>
          <div
            style={{
              position: 'relative'
            }}
          >
            <Typography
              className={clsx(classes.ImageTextFont, classes.ImageTextPosition)}
            >
              ARESTEAS
            </Typography>
            <Typography
              className={clsx(
                classes.ImageText2Font,
                classes.ImageText2Position
              )}
            >
              166m | Motor Yacht | 10 Guests
            </Typography>
          </div>
        </div>

        <Container maxWidth={false} className={classes.CheckIn}>
          <Grid
            container
            spacing={2}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Grid
              item
              container
              md={12}
              lg={8}
              style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}
            >
              <Grid
                item
                style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              >
                <Main />
              </Grid>
              <Grid item>
                <Typography className={classes.Typography}>
                  From{' '}
                  <span
                    className={clsx(classes.Typography, classes.MiddleText)}
                  >
                    €135.000
                  </span>{' '}
                  to{' '}
                  <span
                    className={clsx(classes.Typography, classes.MiddleText)}
                  >
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
                <IconButton data-cy="FavouriteIcon">
                  {' '}
                  <FavoriteIcon style={{ color: 'White' }} />
                </IconButton>
              </Grid>
              <Grid>
                {' '}
                <Button
                  variant="outlined"
                  size="large"
                  label="Enquire"
                  color="primary"
                  className={clsx(classes.margin, classes.enquire)}
                  data-cy="Enquire"
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
                  data-cy="BookNow"
                >
                  Book Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>{' '}
      <Container maxWidth="false" style={{ padding: '0%' }}>
        <Description />
        <Gallery />
        <Accomodation />
        <ImageSlider />
        <YatchServices />
        <Destinations />
        <Reviews />
        <Enquire />
      </Container>
    </>
  );
}
