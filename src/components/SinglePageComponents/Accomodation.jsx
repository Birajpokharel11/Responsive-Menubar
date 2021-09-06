/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography
} from '@material-ui/core';
import Cabins from './AccomodationPic/Cabins.svg';
import Crew from './AccomodationPic/Crew.svg';
import Guest from './AccomodationPic/Guest.svg';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) =>
  createStyles({
    Box: {
      display: 'flex',
      paddingTop: '8%',
      paddingLeft: '6%',
      paddingRight: '11%',
      paddingBottom: '10%',
      [theme.breakpoints.down('815')]: {
        display: 'block'
      }
    },
    TextPosition: {
      flex: '70%',
      paddingRight: '20px'
    },

    listPosition: {
      flex: '30%'
    },
    Paper: {
      width: '100%',
      background: '#F7F7F7',
      height: '559px',
      padding: '40px 32px',
      [theme.breakpoints.down('589')]: {
        width: '83%'
      },
      [theme.breakpoints.down('352')]: {
        width: '83%'
      }
    },
    FirstTitle: {
      minwidth: '148px',
      height: '25px',
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '18px',
      lineHeight: '22px',
      paddingBottom: '20px',
      color: '#2A398D'
    },
    Typography: {
      maxwidth: '820px',
      minheight: '226px',
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '18px',
      lineHeight: '21px',
      color: '#2A398D'
    },
    ListTitle: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: '52px',
      color: '#00204E'
    },
    listStyle: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '16px',
      lineHeight: '52px',
      color: '#00204E',
      textAlign: 'right'
    },
    Grid: {
      paddingTop: '11%'
    },
    ship: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '18px',
      lineHeight: '22px',
      color: '#2A398D',
      display: 'flex',
      paddingLeft: '40%'
    },
    shipnumber: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '22px',
      color: '#2A398D',
      paddingLeft: '40%'
    }
  })
);
const itemData = [
  {
    img: Cabins,
    title: 'Guests',
    Number: '12'
  },

  {
    img: Crew,
    title: 'Cabin',
    Number: '6'
  },
  {
    img: Guest,
    title: 'Crew',
    Number: '11'
  }
];
const list = [
  {
    title: 'LENGTH',
    Number: '157.48ft /48m'
  },

  {
    title: 'BEAM',
    Number: '28.54ft /8.7m'
  },
  {
    title: 'DRAFT',
    Number: '9.51ft /2.9m'
  },
  {
    title: 'GROSS ONNAGE',
    Number: '340 Tonnes'
  },
  {
    title: 'CRUISING SPEED',
    Number: '10 Knots'
  },
  {
    title: 'BUILDER',
    Number: 'Radez'
  },
  {
    title: 'MODEL',
    Number: 'Custom'
  },
  {
    title: 'BUILT',
    Number: '2019'
  }
];

export default function Accomodation() {
  const classes = useStyles();
  return (
    <Box maxWidth="false" className={classes.Box}>
      <div className={classes.TextPosition}>
        <Typography className={classes.FirstTitle}>ACCOMODATION</Typography>
        <Typography className={classes.Typography}>
          > Corsario's interior layout sleeps up to 12 guests in 6 rooms,
          including a master suite, 1 VIP stateroom, 2 double cabins and 2 twin
          cabins. She is also capable of carrying up to 8 crew onboard to ensure
          a relaxed luxury yacht experience. Timeless styling, beautiful
          furnishings and sumptuous seating feature throughout to create an
          elegant and comfortable atmosphere.
          <br />
          <br />
          Corsario's impressive leisure and entertainment facilities make her
          the ideal charter yacht for socialising and entertaining with family
          and friends. Sauna, Air Conditioning, Deck Jacuzzi, WiFi connection on
          board. Luxury Charter yacht Corsario is a gulet yacht, read our online
          guide for more information on gulet Yacht Charter.
        </Typography>
        <Grid container spacing="3" className={classes.Grid}>
          {itemData.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              style={{
                display: 'flex',
                paddingBottom: '54px'
              }}
            >
              <img src={item.img} alt={item.title} />
              <div>
                <Typography className={classes.ship}>{item.title}</Typography>
                <Typography className={classes.shipnumber}>
                  {item.Number}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.listPosition}>
        <Paper square className={classes.Paper}>
          <Typography className={classes.ListTitle}>SPECIFICATION</Typography>
          <List className={classes.tab} style={{ padding: '0, 100px' }}>
            {list.map((list) => (
              <>
                <ListItem>
                  <ListItemText
                    className={classes.ListTitle}
                    primary={list.title}
                  />

                  <ListItemText
                    className={classes.listStyle}
                    primary={list.Number}
                  />
                </ListItem>
                <Divider variant="middle" style={{ marginBottom: '15px' }} />
              </>
            ))}
          </List>
        </Paper>
      </div>
    </Box>
  );
}
