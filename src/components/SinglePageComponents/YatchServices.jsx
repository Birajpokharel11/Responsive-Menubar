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
      paddingLeft: '6%',
      paddingRight: '11%',
      paddingBottom: '10%',
      paddingTop: '100px'
    },
    TypographyHeading: {
      fontFamily: 'Lato',
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: '22px',
      color: '#2A398D  '
    },
    ListItems: {
      fontFamily: 'Lato',
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '18px',
      color: '#2A398D',
      paddingDown: '10px'
    }
  })
);
export default function YatchServices() {
  const classes = useStyles();
  return (
    <Box maxWidth="false" className={classes.Box}>
      <div>
        <Typography className={classes.TypographyHeading}>TOYS</Typography>
        <Grid container>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className={classes.demo}>
              <List className={classes.ListItems}>
                <ListItem>
                  <Typography className={classes.ListItems}>* Kayak</Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * Paddle Boards
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * Banana
                  </Typography>
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className={classes.demo}>
              <List className={classes.ListItems}>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * 2x Inflatable Donut
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * Wakeboard
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * Fishing Tackles Basic
                  </Typography>
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className={classes.demo}>
              <List className={classes.ListItems}>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * Snorkeling Equipment
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * Seabob
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * Jet Ski
                  </Typography>
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className={classes.demo}>
              <List className={classes.ListItems}>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * Tender
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * Water Ski
                  </Typography>
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container style={{ paddingTop: '120px', paddingBottom: '10px' }}>
          <Grid item sm={4} md={6} lg={6}>
            <div className={classes.demo}>
              <Typography className={classes.TypographyHeading}>
                INCLUSIVE TERMS
              </Typography>
              <List className={classes.ListItems}>
                <ListItem>
                  <Typography className={classes.ListItems}>* Wi-Fi</Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * Yacht Rental
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * Crew and Onboard Services
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * Use of Onboard Services
                  </Typography>
                </ListItem>{' '}
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * Complete Linen and Towels
                  </Typography>
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item sm={4} md={6} lg={6}>
            <div className={classes.demo}>
              {' '}
              <Typography className={classes.TypographyHeading}>
                OPTIONAL EXTRAS
              </Typography>
              <List className={classes.ListItems}>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * National Park Entry Fees
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * Airport Transfers
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * Private Marina Fees
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    * Crew Gratuities
                  </Typography>
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
