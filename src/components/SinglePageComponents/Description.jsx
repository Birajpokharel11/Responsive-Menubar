/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import Aresteas from './Aresteas.svg';
import Game from './Game.svg';
import Deck from './Deck.svg';
import Air from './Air.svg';
import Ipod from './Ipod.svg';
import Satellite from './Satellite.svg';
import Sauna from './Sauna.svg';
import Wifi from './Wifi.svg';
import { ImageSearchSharp } from '@material-ui/icons';
import clsx from 'clsx';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) =>
  createStyles({
    Container: {
      backgroundColor: 'skyblue',
      marginTop: '53px',
      width: '100%',
      height: 'auto',
      paddingLeft: '100px'
    },
    Typography: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '18px',
      lineHeight: '22px',
      minwidth: '505px',
      color: '#2A398D',
      paddingTop: '20px',
      [theme.breakpoints.down('560')]: {
        width: '343px'
      },
      [theme.breakpoints.down('385')]: {
        width: '300px',
        fontSize: '16px'
      },
      [theme.breakpoints.up('1400')]: {
        width: '505px'
      }
    },
    Typography1: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '32px',
      color: '#2A398D',
      [theme.breakpoints.down('430')]: {
        fontSize: '24px'
      }
    },
    Typography2: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      paddingTop: '64px',
      color: '#2A398D'
    },

    Box: { padding: '0%', paddingTop: '65px', display: 'flex' },

    Images: {
      flex: '50%',
      display: 'flex',
      justifyContent: 'flex-end',
      maxwidth: '1268.61px',
      objectFit: 'cover',
      [theme.breakpoints.down('1444')]: {
        width: '500px',
        height: '750px'
      },
      [theme.breakpoints.down('1221')]: {
        width: '400px',
        height: '650px'
      },
      [theme.breakpoints.down('900')]: {
        display: 'none'
      }
    },
    TextPosition: {
      paddingLeft: '100px',
      paddingRight: '100px',
      [theme.breakpoints.down('1110')]: {
        paddingRight: '10px'
      },
      width: '100%',
      flex: '50%',
      [theme.breakpoints.down('900')]: {
        paddingRight: '5%',
        paddingLeft: '5%'
      },
      [theme.breakpoints.down('560')]: {
        paddingRight: '6%',
        paddingLeft: '6%'
      },
      [theme.breakpoints.down('385')]: {
        paddingRight: '3%',
        paddingLeft: '3%'
      }
    },
    mobileImage: {
      display: 'none',
      [theme.breakpoints.down('900')]: {
        display: 'block',
        objectFit: 'cover',
        width: '100%',
        paddingTop: '32px',
        [theme.breakpoints.down('560')]: {
          width: '343px'
        },
        [theme.breakpoints.down('385')]: {
          width: '300px'
        }
      }
    },
    Grid: {
      width: '505px',
      [theme.breakpoints.down('560')]: {
        paddingLeft: '10%',
        width: '113px'
      }
    }
  })
);

export function Description() {
  const itemData = [
    {
      img: Game,
      title: 'Game Consols'
    },

    {
      img: Wifi,
      title: 'Free Wi Fi'
    },
    {
      img: Satellite,
      title: 'Satellite TV'
    },
    {
      img: Air,
      title: 'Air Conditioning'
    },
    {
      img: Deck,
      title: 'Deck Jacuzzi'
    },
    {
      img: Ipod,
      title: 'Ipod Docking'
    },
    {
      img: Sauna,
      title: 'Sauna'
    }
  ];
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  const classes = useStyles();
  return (
    <div style={{ marginBottom: '10%' }}>
      <Breadcrumbs
        style={{
          paddingTop: '58px',
          paddingLeft: '100px'
        }}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          color="inherit"
          color="textPrimary"
          href="/"
          onClick={handleClick}
        >
          Material-UI
        </Link>
        <Link
          color="textPrimary"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          Core
        </Link>
        <Typography color="">Breadcrumb</Typography>
      </Breadcrumbs>
      <Box maxWidth="false" className={classes.Box}>
        <div className={classes.TextPosition}>
          <Typography className={classes.Typography1}>
            ABOUT ATESTEAS
          </Typography>
          <Typography className={clsx(classes.Typography, classes.Placement1)}>
            Built in 2011, Corsario is a 56m (inc. bowsprit) modern classic
            sailing yacht, an authentic schooner, that combines state of the art
            construction with a timeless and elegant design that harks back to
            the classic yachts of the previous century. Exceptional seakeeping
            and performance under sail make her an exciting base for those
            looking to experience the thrills of traditional sailing and life
            right on the water. Corsario’s experienced Greek crew of seven are
            experts in all that the Greek islands have to offer and will help
            create an unforgettable custom itinerary for her lucky guests.
          </Typography>
          <div>
            <img src={Aresteas} className={classes.mobileImage} />
          </div>
          <Typography className={classes.Typography2}>
            AMENITIES & ENTERTAINMENT
          </Typography>
          <Typography
            className={classes.Typography}
            style={{ paddingBottom: '61px' }}
          >
            Sauna, Air Conditioning, Deck Jacuzzi, WiFi connection on board.
            Luxury Charter yacht Corsario is a gulet yacht, read our online
            guide for more information on gulet Yacht Charter.
          </Typography>
          <Grid container className={classes.Grid}>
            {itemData.map((item) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                style={{
                  display: 'flex'
                }}
              >
                <img src={item.img} alt={item.title} />
                <Typography
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px'
                  }}
                >
                  {item.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>
        <div>
          <img src={Aresteas} className={classes.Images} />
        </div>
      </Box>
    </div>
  );
}
