import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    background: 'white',
    padding: '0.5rem'
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
      <Typography className={classes.text}>
        © {new Date().getFullYear()} DataCenterinvest.Asia, All rights reserved
      </Typography>
    </Box>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
