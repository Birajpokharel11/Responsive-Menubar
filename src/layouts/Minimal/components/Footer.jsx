import React from 'react';
import { Button, Container, Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Searchbar from './Searchbar';
import Facebook from './FooterIcons/Facebook.svg';
import Instagram from './FooterIcons/Instagram.svg';
import Linkedin from './FooterIcons/Linkedin.svg';
import Twitter from './FooterIcons/Twitter.svg';
import Youtube from './FooterIcons/Youtube.svg';
import { IconButton } from '@material-ui/core';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

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
    lineHeight: '19px',
    marginTop: '6%'
  },
  ListitemsMargin: {
    marginTop: '4%'
  },
  TypographyHeading: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    color: 'white',
    lineHeight: '24px'
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
          paddingLeft: '99px',
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
              <ListItem component={Link} to="/">
                <Typography className={classes.ListItems}>Browse</Typography>
              </ListItem>
              <ListItem component={Link} to="/">
                <Typography className={classes.ListItems}>For Sale</Typography>
              </ListItem>
              <ListItem component={Link} to="/">
                <Typography className={classes.ListItems}>
                  {' '}
                  For Charter
                </Typography>
              </ListItem>
            </div>
            <div>
              <ListItem component={Link} to="/">
                <Typography className={classes.ListItems}> About</Typography>
              </ListItem>
              <ListItem component={Link} to="/">
                <Typography className={classes.ListItems}>
                  Destinations
                </Typography>
              </ListItem>
              <ListItem component={Link} to="/">
                <Typography className={classes.ListItems}> Dinning</Typography>
              </ListItem>
            </div>
            <div>
              <ListItem component={Link} to="/">
                <Typography className={classes.ListItems}> Blog</Typography>
              </ListItem>
              <ListItem component={Link} to="/">
                <Typography className={classes.ListItems}>SignIn</Typography>
              </ListItem>
              <ListItem component={Link} to="/">
                <Typography className={classes.ListItems}> Sign Up</Typography>
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
              <IconButton color="inherit" data-cy="Footer-facebook">
                <img src={Facebook} alt="facebook" />
              </IconButton>
              <IconButton color="inherit" data-cy="Footer-Instagram">
                <img src={Instagram} alt="Instagram" />
              </IconButton>
              <IconButton color="inherit" data-cy="Footer-LinkedIn">
                <img src={Linkedin} alt="LinkedIn" />
              </IconButton>
              <IconButton color="inherit" data-cy="Footer-Twitter">
                <img src={Twitter} alt="Twitter" />
              </IconButton>
              <IconButton color="inherit" data-cy="Footer-Youtube">
                <img src={Youtube} alt="Youtube" />
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
