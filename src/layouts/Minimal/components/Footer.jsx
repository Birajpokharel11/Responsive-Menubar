import React from 'react';
import { Button, Container, Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Searchbar from './Searchbar';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { IconButton } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    background: '#091527',
    width: '100%',
    minheight: '570px',
    paddingBottom: '8%'
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Ubuntu',
    fontWeight: 'normal',
    fontSize: '10.4846px',
    color: '#545FDB'
  },
  ListItems: {
    color: 'white',
    display: 'flex',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '19px'
  },
  ListItems2: {
    color: 'white',
    display: 'flex',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    marginTop: '4%'
  },
  ListitemsMargin: {
    marginTop: '4%'
  },
  TypographyHeading: {
    fontFamily: 'Lato',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    color: 'white'
  },
  TypographyBody: {
    color: 'white'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid
        container
        style={{
          paddingTop: '12%',
          paddingLeft: '14%',
          paddingRight: '14%'
        }}
      >
        <Grid item md={4} style={{ color: 'white', fontFamily: 'lato' }}>
          <Typography className={classes.TypographyHeading}>
            EXCLUSIVE GULETS
          </Typography>
          <Typography className={classes.ListItems2}>
            Level 1. Devonshire House
            <br /> One Mayfair Place <br />
            Mayfair, London ,<br />
            W1J8AJ, ENGLAND
            <br />
            <br />
            info@exclusivegulet.com <br />
            t. +44 208 144 58 34
          </Typography>
        </Grid>
        <Grid item md={4}>
          <List className={classes.ListItems}>
            <div>
              <ListItem>
                <Typography className={classes.ListItems}> Kayak</Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.ListItems}>
                  Paddle Boards
                </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.ListItems}> Banana</Typography>
              </ListItem>
            </div>
            <div>
              <ListItem>
                <Typography className={classes.ListItems}> Kayak</Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.ListItems}>
                  Paddle Boards
                </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.ListItems}> Banana</Typography>
              </ListItem>
            </div>
            <div>
              <ListItem>
                <Typography className={classes.ListItems}> Kayak</Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.ListItems}>
                  Paddle Boards
                </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.ListItems}> Banana</Typography>
              </ListItem>
            </div>
          </List>
        </Grid>
        <Grid item md={4}>
          <div style={{ marginBottom: '13%' }}>
            <Typography className={classes.TypographyHeading}>
              Yacht-Style Newsletter
            </Typography>
            <Typography
              className={clsx(classes.ListItems, classes.ListitemsMargin)}
            >
              If you like yachts you need this newsletter in your life.
            </Typography>
          </div>
          <Searchbar />
          <div
            style={{ color: 'white', marginTop: '16%', marginBottom: '11%' }}
          >
            <Typography className={classes.TypographyHeading}>
              Contact Us
            </Typography>
            <div>
              <IconButton color="inherit">
                <FacebookIcon
                  style={{
                    width: '56.41px',
                    height: '52px'
                  }}
                />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon
                  style={{
                    width: '56.41px',
                    height: '52px'
                  }}
                />
              </IconButton>
              <IconButton color="inherit">
                <LinkedInIcon
                  style={{
                    width: '56.41px',
                    height: '52px'
                  }}
                />
              </IconButton>
              <IconButton color="inherit">
                <TwitterIcon
                  style={{
                    width: '56.41px',
                    height: '52px'
                  }}
                />
              </IconButton>
              <IconButton color="inherit">
                <YouTubeIcon
                  style={{
                    width: '56.41px',
                    height: '52px'
                  }}
                />
              </IconButton>
            </div>
          </div>
        </Grid>
      </Grid>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{
            color: 'white',
            width: '100%'
          }}
        >
          <Grid item md={7}>
            <Typography className={classes.ListItems}>
              Copyright 2019 - EXCLUSIVE GULETS
            </Typography>
          </Grid>
          <Grid item md={5}>
            <div
              color="inherit"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5rem',
                marginLeft: '7%'
              }}
            >
              <Typography className={classes.ListItems}>Privacy</Typography>
              <Typography className={classes.ListItems}>
                Terms and Conditions
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
