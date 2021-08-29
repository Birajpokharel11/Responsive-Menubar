/* eslint-disable no-unused-expressions */
// /* eslint-disable no-undef */
// /* eslint-disable jsx-a11y/alt-text */
// import React from 'react';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Logo from '../../../assets/img/logo.svg';
// import { Divider } from '@material-ui/core';
// import { BorderStyle } from '@material-ui/icons';
// import SearchIcon from '@material-ui/icons/Search';
// import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
// import EmailIcon from '@material-ui/icons/Email';
// import PersonIcon from '@material-ui/icons/Person';

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {},
//     menuButton: {
//       marginRight: theme.spacing(2)
//     },
//     title: {
//       display: 'flex',
//       flexGrow: 1,
//       textAlign: 'center',
//       justifyContent: 'center',
// fontFamily: 'Lato',
// fontStyle: 'normal',
// fontWeight: 'normal',
// fontSize: '14px',
// lineHeight: '17px',
// textTransform: 'uppercase',
// width: '53px',
// height: ' 17px',
// color: ' #FFFFFF'
//     },
//     logo: {
// maxWidth: ' 192px',
// minHeight: '72px',
// marginRight: theme.spacing(4)
//     },
//     Appbar: {
// backgroundColor: '#091527',
// height: '72px',
// maxWidth: '100%'
//     },
//     icons: {
//       display: 'flex',
//       gap: '1rem',
//       alignItems: 'center',
//       marginRight: '5rem'
//     },
//     contacts: {
//       display: 'flex',
//       gap: '0.5rem',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }
//   })
// );

// const Topbar = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" className={classes.Appbar}>
//         <Toolbar style={{ flexGrow: 1 }}>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <img src={Logo} className={classes.logo} />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             Yatchs
//           </Typography>
//           <Typography variant="h6" className={classes.title}>
//             offers
//           </Typography>{' '}
//           <Typography variant="h6" className={classes.title}>
//             destinations
//           </Typography>{' '}
//           <Typography variant="h6" className={classes.title}>
//             bespoke experiences
//           </Typography>{' '}
//           <Typography variant="h6" className={classes.title}>
//             news & blogs
//           </Typography>
//           <Typography variant="h6" className={classes.title}>
//             More
//           </Typography>
//           <div className={classes.icons}>
//             <SearchIcon />
//             <PhoneEnabledIcon />
//             <EmailIcon />
//             <Divider
//               orientation="vertical"
//               flexItem
//               style={{ backgroundColor: 'rgba(255, 255, 255, 0.23)' }}
//             />
//             <div className={classes.contacts}>
//               <PersonIcon />
// <Typography variant="h6" className={classes.title}>
//   Members
// </Typography>
//             </div>
//             <br />
//           </div>
//         </Toolbar>
//       </AppBar>
//       {/* <Offer /> */}
//     </div>
//   );
// };
// export default Topbar;
// import Logo from '../../../assets/img/logo.svg';
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
  Typography
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

const drawerWidth = 400;
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginTop: '8px'
  },
  logo: {
    maxWidth: ' 210px',
    minHeight: '35.84px'
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
    lineHeight: '17px',
    textTransform: 'uppercase',
    color: ' #FFFFFF',
    minWidth: '50px'
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
    [theme.breakpoints.down('755')]: {
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
  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/YATCHS' && value !== 0) {
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
        <Container maxWidth="xl">
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
            <Hidden xlUp>
              <div style={{ flexGrow: 1 }} />
            </Hidden>
            <Hidden mdDown>
              <Tabs
                value={value}
                className={classes.tabContainer}
                onChange={handelChange}
                indicatorColor="none"
              >
                <Tab
                  label=""
                  component={Link}
                  to="/"
                  style={{ display: 'none', padding: '0', margin: '0' }}
                />
                <Tab
                  className={classes.tab}
                  label="YATCHS"
                  component={Link}
                  to="/YATCHS"
                />
                <Tab
                  className={classes.tab}
                  label="OFFERS"
                  component={Link}
                  to="/OFFERS"
                />
                <Tab
                  className={classes.tab}
                  label="DESTINATIONS"
                  component={Link}
                  to="/DESTINATIONS"
                />
                <Tab
                  className={classes.tab}
                  label="BESPOKE EXPERIENCES"
                  component={Link}
                  to="/BESPOKEEXPERIENCES"
                />
                <Tab
                  className={classes.tab}
                  label="NEWS $ BLOGS"
                  component={Link}
                  to="/NEWSBLOGS"
                />
                <Tab
                  lassName={classes.tab}
                  label="MORE"
                  component={Link}
                  to="/MORE"
                />
              </Tabs>
            </Hidden>
            <Hidden xsDown>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit">
                <PhoneEnabledIcon />
              </IconButton>{' '}
            </Hidden>
            <IconButton color="inherit">
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
              <IconButton color="inherit">
                <PersonIcon />
              </IconButton>{' '}
              <Typography className={classes.tab}>Members</Typography>
            </Hidden>
            <Hidden lgUp>
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
              <IconButton
                color="inherit"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(mobileOpen && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                onClick={handleDrawerClose}
                color="inherit"
                className={clsx(!mobileOpen && classes.hide)}
              >
                <CloseIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
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
        <div style={{ padding: '92px 0 92px 20px' }}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
          <List className={classes.tab}>
            <ListItem className={classes.listStyle}>
              <ListItemText primary="YATCHS" />
            </ListItem>
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />
            <ListItem className={classes.listStyle}>
              <ListItemText primary="OFFERS" />
            </ListItem>{' '}
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />
            <ListItem className={classes.listStyle}>
              <ListItemText primary="DESTINATIONS" />
            </ListItem>{' '}
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />
            <ListItem className={classes.listStyle}>
              <ListItemText primary="BESPOKE EXPERIENCES" />
            </ListItem>{' '}
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />
            <ListItem className={classes.listStyle}>
              <ListItemText primary="NEWS & BLOGS" />
            </ListItem>{' '}
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />
            <ListItem className={classes.listStyle}>
              <ListItemText primary="MORE" />
            </ListItem>{' '}
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />
          </List>
        </div>
      </Drawer>
    </>
  );
}
// import React, { useState } from 'react';
// 92px 0 92px 20px
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import CloseIcon from '@material-ui/icons/Close';

// import Logo from '../../../assets/img/logo.svg';
// import { Hidden } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: '2%',
//     background: 'white'
//   },
//   logo: {
//     [theme.breakpoints.down('sm')]: {
//       width: '60%'
//     }
//   },
//   flexGrow: {
//     flexGrow: 1
//   },
//   title: {
//     fontFamily: 'Duke Charming DEMO',
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     fontSize: '49.4624px',
//     lineHeight: '49px',
//     color: '#000000'
//   },
//   search: {
//     position: 'relative',
//     boxShadow: '0px 4px 24px rgba(84, 95, 219, 0.25)',
//     borderRadius: '17px',
//     marginLeft: '8px',
//     width: '100%',
//     height: '60.61px',
//     [theme.breakpoints.up('sm')]: {
//       width: '350px'
//     },
//     [theme.breakpoints.up('md')]: {
//       width: '390px'
//     },
//     [theme.breakpoints.up('lg')]: {
//       width: '530px'
//     }
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   inputRoot: {
//     color: 'inherit'
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     fontSize: '16px'
//   },
//   searchButton: {
//     width: '140px',
//     height: '60.61px',
//     borderRadius: '17px',
//     background: '#545FDB',
//     color: 'white',
//     '&:hover': {
//       background: '#545FDB'
//     }
//   },
//   label: {
//     fontFamily: 'Ubuntu',
//     fontStyle: 'normal',
//     fontWeight: 500,
//     fontSize: '16.3822px',
//     lineHeight: '21px',
//     color: '#FFFFFF',
//     textTransform: 'none'
//   },
//   mobileIcon: {
//     height: 35,
//     width: 35
//   },
//   mobileRoot: {
//     display: 'flex',
//     alignItems: 'center',
//     height: '56px',
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       height: '64px'
//     }
//   },
//   mobileInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: theme.spacing(2),
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     fontSize: '16px'
//   }
// }));

// const Topbar = (props) => {
//   const classes = useStyles();
//   const [open, setOpen] = useState(false);

//   const toggle = () => {
//     setOpen(!open);
//   };

//   return (
//     <AppBar
//       className={classes.root}
//       color="transparent"
//       position="static"
//       elevation={0}
//     >
//       <Toolbar>
//         {!open && (
//           <>
//             <img className={classes.logo} alt="Logo" src={Logo} />
//             <div className={classes.flexGrow} />
//           </>
//         )}

//         <Hidden smDown>
//           <Paper component="form" className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon style={{ color: 'rgba(0, 0, 0, 0.5)' }} />
//             </div>
//             <InputBase
//               fullWidth
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//               endAdornment={
//                 <Button
//                   size="large"
//                   classes={{
//                     root: classes.searchButton,
//                     label: classes.label
//                   }}
//                   type="submit"
//                 >
//                   Search
//                 </Button>
//               }
//             />
//           </Paper>
//         </Hidden>
//         <Hidden mdUp>
//           {!open && (
//             <IconButton onClick={toggle}>
//               <SearchIcon className={classes.mobileIcon} />
//             </IconButton>
//           )}

//           {open && (
//             <Paper component="form" className={classes.mobileRoot}>
//               <InputBase
//                 fullWidth
//                 placeholder="Search…"
//                 classes={{
//                   root: classes.inputRoot,
//                   input: classes.mobileInput
//                 }}
//                 inputProps={{ 'aria-label': 'search' }}
//                 endAdornment={
//                   <IconButton onClick={toggle}>
//                     <CloseIcon />
//                   </IconButton>
//                 }
//               />
//             </Paper>
//           )}
//         </Hidden>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Topbar;
