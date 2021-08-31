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
      maxwidth: '505px',
      color: '#2A398D',
      paddingTop: '20px'
    },
    typography1: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '32px',
      color: '#2A398D'
    },
    Typography2: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      paddingTop: '64px',
      color: '#2A398D'
    },
    Images: {
      flex: '50%',
      display: 'flex',
      justifyContent: 'flex-end',
      maxwidth: '1268.61px',
      objectFit: 'cover',
      [theme.breakpoints.down('1084')]: {}
    },
    TextPosition: {
      padding: '0%',
      paddingLeft: '100px',
      height: '220px',
      width: '505px',
      flex: '40%'
    },
    Box: { padding: '0%', paddingTop: '65px', display: 'flex' }
  })
);

export function Description() {
  const itemData = [
    {
      img: Game,
      title: 'Game Consols',
      author: 'author'
    },

    {
      img: Wifi,
      title: 'Free Wi Fi',
      author: 'author'
    },
    {
      img: Satellite,
      title: 'Satellite TV',
      author: 'author'
    },
    {
      img: Air,
      title: 'Air Conditioning',
      author: 'author'
    },
    {
      img: Deck,
      title: 'Deck Jacuzzi',
      author: 'author'
    },
    {
      img: Ipod,
      title: 'Ipod Docking',
      author: 'author'
    },
    {
      img: Sauna,
      title: 'Sauna',
      author: 'author'
    }
  ];
  const classes = useStyles();
  return (
    <div style={{ marginBottom: '10%' }}>
      <Typography
        style={{
          paddingTop: '58px',
          paddingLeft: '100px'
        }}
      >
        Home>Yatchs>Atteries
      </Typography>
      <Box className={classes.Box}>
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
          <Grid container style={{ width: '505px' }}>
            {itemData.map((item) => (
              <Grid
                item
                xs={6}
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
