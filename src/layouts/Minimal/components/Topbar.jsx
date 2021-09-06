import logo from '../../../assets/img/logo.svg';
import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import {
  Tabs,
  Tab,
  Button,
  Container,
  Divider,
  Typography,
  Paper,
  MenuItem
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';
import SearchIcon from '@material-ui/icons/Search';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import { Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';

const drawerWidth = 400;
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginTop: '8px'
  },
  logo: {
    maxWidth: ' 210px',
    minHeight: '35.84px',
    [theme.breakpoints.down('340')]: {
      width: '180px'
    }
  },
  AppBar: {
    backgroundColor: '#091527',
    height: '72px',
    maxWidth: '100%',
    zIndex: theme.zIndex.modal + 1
  },
  tab: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    textTransform: 'uppercase',
    color: ' #FFFFFF',
    minWidth: '50px'
  },
  Menu: {
    backgroundColor: '#1b4077',

    color: '#FFFFFF'
  },
  logoContainer: {
    padding: 0
  },
  tabContainer: {
    [theme.breakpoints.down('lg')]: {
      padding: '0px,0px,0px,32px'
    }
  },
  drawer: {
    backgroundColor: '#091527'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#071529D9',
    paddingRight: '2%',
    [theme.breakpoints.down('785')]: {
      width: '80%'
    },
    [theme.breakpoints.down('700')]: {
      width: '100%'
    }
  },
  listStyle: {
    marginTop: '24px'
  },
  hide: {
    display: 'none'
  }
}));

export default function Header(props) {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handelChange = (e, value) => {
    setValue(value);
  };

  const handleDrawerOpen = () => {
    setMobileOpen(true);
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
    setOpen(false);
  };

  //////////////////////////////////////////////////////////Menus
  const [tabopen, setTabopen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setTabopen((prevOpen) => !prevOpen);
  };

  const handleCloseTab = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setTabopen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setTabopen(false);
    }
  }
  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/YATCHS' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/OFFERS' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/DESTINATIONS' && value !== 3) {
      setValue(3);
    } else if (
      window.location.pathname === '/BESPOKEEXPERIENCES' &&
      value !== 4
    ) {
      setValue(4);
    } else if (window.location.pathname === '/NEWSBLOGS' && value !== 5) {
      setValue(5);
    } else if (window.location.pathname === '/MORE' && value !== 6) {
      setValue(6);
    } else if (window.location.pathname === '/ABOUTYOU' && value !== 6) {
      setValue(6);
    } else if (window.location.pathname === '/DINNING' && value !== 6) {
      setValue(6);
    }
  }, [value]);
  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        elevation={0}
        className={classes.AppBar}
      >
        <Toolbar className={classes.toolbar}>
          <Button
            component={Link}
            to="/"
            className={classes.logoContainer}
            onClick={() => setValue(0)}
          >
            <img
              alt="company logo"
              className={classes.logo}
              src={logo}
              width="330"
            />
          </Button>
          <div style={{ flexGrow: 1 }} />
          <Hidden mdDown>
            <Tabs
              value={value}
              className={classes.tabContainer}
              onChange={handelChange}
              indicatorColor="none"
            >
              <Tab
                label="sad"
                component={Link}
                to="/YATCHS"
                style={{ display: 'none', padding: '0', margin: '0' }}
              />
              <Tab
                className={classes.tab}
                label="YATCHS"
                component={Link}
                to="/YATCHS"
                data-cy="YATCHS"
              />
              <Tab
                className={classes.tab}
                label="OFFERS"
                component={Link}
                to="/OFFERS"
                data-cy="OFFERS"
              />
              <Tab
                className={classes.tab}
                label="DESTINATIONS"
                component={Link}
                to="/DESTINATIONS"
                data-cy="DESTINATIONS"
              />
              <Tab
                className={classes.tab}
                label="BESPOKE EXPERIENCES"
                component={Link}
                to="/BESPOKEEXPERIENCES"
                data-cy="BESPOKEEXPERIENCES"
              />
              <Tab
                className={classes.tab}
                label="NEWS $ BLOGS"
                component={Link}
                to="/NEWSBLOGS"
                data-cy="NEWSBLOGS"
              />
              <Tab
                className={classes.tab}
                label="MORE"
                component={Link}
                to="/MORE"
                ref={anchorRef}
                aria-controls={tabopen ? 'menu-list-grow' : undefined}
                onClick={handleToggle}
                data-cy="MORE"
              />{' '}
              <Popper
                open={tabopen}
                anchorEl={anchorRef.current}
                role={undefined}
              >
                <Paper style={{ marginTop: '0.5rem' }}>
                  <ClickAwayListener onClickAway={handleCloseTab}>
                    <MenuList
                      autoFocusItem={tabopen}
                      className={clsx(classes.tab, classes.Menu)}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = '#cadaf3')
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = '')
                        }
                        className={clsx(classes.tab, classes.Menu)}
                        onClick={handleCloseTab}
                        to="/ABOUTYOU"
                        data-cy="ABOUTYOU"
                        component={Link}
                      >
                        ABOUT YOU
                      </MenuItem>
                      <MenuItem
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = '#cadaf3')
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = '')
                        }
                        className={clsx(classes.tab, classes.Menu)}
                        onClick={handleCloseTab}
                        to="/DINNING"
                        component={Link}
                        data-cy="DINNING"
                      >
                        DINNING
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Popper>
            </Tabs>
          </Hidden>
          <Hidden xsDown>
            <IconButton color="inherit" data-cy="SearchIcon">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit" data-cy="PhoneEnabledIcon">
              <PhoneEnabledIcon />
            </IconButton>{' '}
          </Hidden>
          <IconButton color="inherit" data-cy="EmailIcon">
            <EmailIcon />
          </IconButton>{' '}
          <Hidden smDown>
            <Divider
              orientation="vertical"
              flexItem
              style={{
                backgroundColor: 'rgba(255, 255, 255,  0.23)',
                marginTop: '4px'
              }}
            />
            <IconButton color="inherit" data-cy="PersonIcon">
              <PersonIcon />
              <Typography className={classes.tab}>Members</Typography>
            </IconButton>{' '}
          </Hidden>
          <Hidden xsDown>
            <Divider
              orientation="vertical"
              flexItem
              style={{
                backgroundColor: 'rgba(255, 255, 255,  0.23)',
                marginTop: '4px',
                marginLeft: '8px'
              }}
            />
          </Hidden>
          <Hidden lgUp>
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(mobileOpen && classes.hide)}
              data-cy="Menu-Icon"
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              onClick={handleDrawerClose}
              color="inherit"
              className={clsx(!mobileOpen && classes.hide)}
              data-cy="Close-Icon"
            >
              <CloseIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div style={{ padding: '162px 0 92px 20px', color: 'white' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '2%'
            }}
          >
            {' '}
            <Hidden smUp>
              <div>
                <IconButton color="inherit" data-cy="TMB-SearchIcon">
                  <SearchIcon />
                </IconButton>
                <IconButton color="inherit" data-cy="TMB-PhoneEnabledIcon">
                  <PhoneEnabledIcon />
                </IconButton>{' '}
              </div>
            </Hidden>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Divider
                orientation="vertical"
                flexItem
                style={{
                  backgroundColor: 'rgba(255, 255, 255,  0.23)',
                  marginTop: '4px'
                }}
              />
              <IconButton color="inherit" data-cy="TMB-PersonIcon">
                <PersonIcon />{' '}
                <Typography className={classes.tab}>Members</Typography>
              </IconButton>{' '}
            </div>
          </div>

          <List className={classes.tab}>
            <Button
              color="inherit"
              to="/YATCHS"
              component={Link}
              onClick={handleDrawerClose}
              data-cy="TMB-YATCHS"
            >
              <ListItem className={classes.listStyle}>
                <ListItemText primary="YATCHS" />
              </ListItem>
            </Button>
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />

            <Button
              color="inherit"
              to="/OFFERS"
              component={Link}
              data-cy="TMB-OFFERS"
              onClick={handleDrawerClose}
            >
              <ListItem className={classes.listStyle}>
                <ListItemText primary="OFFERS" />
              </ListItem>{' '}
            </Button>
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />

            <Button
              color="inherit"
              to="/DESTINATIONS"
              component={Link}
              data-cy="TMB-DESTINATIONS"
              onClick={handleDrawerClose}
            >
              <ListItem className={classes.listStyle}>
                <ListItemText primary="DESTINATIONS" />
              </ListItem>{' '}
            </Button>
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />

            <Button
              color="inherit"
              to="/BESPOKEEXPERIENCES"
              component={Link}
              data-cy="TMB-BESPOKE-EXPERIENCES"
              onClick={handleDrawerClose}
            >
              <ListItem className={classes.listStyle}>
                <ListItemText primary="BESPOKE EXPERIENCES" />
              </ListItem>{' '}
            </Button>
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />

            <Button
              color="inherit"
              to="/NEWSBLOGS"
              component={Link}
              data-cy="TMB-NEWS-BLOGS"
              onClick={handleDrawerClose}
            >
              <ListItem className={classes.listStyle}>
                <ListItemText primary="NEWS & BLOGS" />
              </ListItem>{' '}
            </Button>
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />

            <Button
              color="inherit"
              to="/ABOUTYOU"
              component={Link}
              data-cy="TMB-ABOUT-YOU"
              onClick={handleDrawerClose}
            >
              <ListItem className={classes.listStyle}>
                <ListItemText primary="ABOUTYOU" />
              </ListItem>{' '}
            </Button>
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />
            <Button
              color="inherit"
              to="/DINNING"
              component={Link}
              data-cy="TMB-Dinning"
              onClick={handleDrawerClose}
            >
              <ListItem className={classes.listStyle}>
                <ListItemText primary="Dinning" />
              </ListItem>{' '}
            </Button>
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />
          </List>
        </div>
      </Drawer>
    </>
  );
}
