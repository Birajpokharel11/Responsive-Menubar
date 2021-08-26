/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './Logo.png';
import { Divider, TextareaAutosize } from '@material-ui/core';
import { BorderStyle } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      display: 'flex',
      flexGrow: 1,
      textAlign: 'center',
      justifyContent: 'center',
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '17px',
      textTransform: 'uppercase',
      width: '53px',
      height: ' 17px',
      color: ' #FFFFFF'
    },
    logo: {
      maxWidth: ' 192px',
      minHeight: '72px',
      marginRight: theme.spacing(4)
    },
    Appbar: {
      background: '#091527',
      height: '72px',
      maxWidth: '100%'
    },
    icons: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      marginRight: '5rem'
    },
    contacts: {
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
);

export function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.Appbar}>
        <Toolbar style={{ flexGrow: 1 }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src={Logo} className={classes.logo} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Yatchs
          </Typography>
          <Typography variant="h6" className={classes.title}>
            offers
          </Typography>{' '}
          <Typography variant="h6" className={classes.title}>
            destinations
          </Typography>{' '}
          <Typography variant="h6" className={classes.title}>
            bespoke experiences
          </Typography>{' '}
          <Typography variant="h6" className={classes.title}>
            news & blogs
          </Typography>
          <Typography variant="h6" className={classes.title}>
            More
          </Typography>
          <div className={classes.icons}>
            <SearchIcon />
            <PhoneEnabledIcon />
            <EmailIcon />
            <Divider
              orientation="vertical"
              flexItem
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.23)' }}
            />
            <div className={classes.contacts}>
              <PersonIcon />
              <Typography variant="h6" className={classes.title}>
                Members
              </Typography>
            </div>
            <br />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
