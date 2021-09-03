import React from 'react';
import { Button, Container, Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    background: '#091527',
    width: '100%',
    height: '570px'
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Ubuntu',
    fontWeight: 'normal',
    fontSize: '10.4846px',
    lineHeight: '12px',
    color: '#545FDB'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid
        container
        style={{
          paddingTop: '80px',
          paddingLeft: '100px',
          paddingRight: '100px'
        }}
      >
        <Grid item>
          <Typography style={{ color: 'white' }}>
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
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
