import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    ButtonGroup: {
      height: '52px',
      width: '500px',
      border: ' 1px solid rgba(255, 255, 255, 0.5)',
      boxSizing: 'borderBox',
      borderRadius: '4px',
      borderRadius: '4px'
    },
    Typography: {
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '18px',
      letterSpacing: '0em',
      textTransform: 'uppercase'
    },
    ArrowIcon: {
      color: 'white',
      width: ' 38px',
      height: '34px'
    }
  })
);
const options = ['Check In', 'Squash and merge', 'Rebase and merge'];

export default function Checkin() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <div className={classes.ButtonGroup}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <ButtonGroup variant="" ref={anchorRef}>
              <Button
                onClick={handleClick}
                style={{ color: 'white' }}
                className={classes.Typography}
              >
                {options[selectedIndex]}
              </Button>{' '}
              <div style={{ flexGrow: 1 }} />
              <Button
                color="primary"
                size="small"
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
              >
                <KeyboardArrowDownIcon className={classes.ArrowIcon} />
              </Button>
            </ButtonGroup>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            style={{
              backgroundColor: 'white',
              marginTop: '5px'
            }}
          />
          <Grid item>
            <ButtonGroup variant="transtarent" ref={anchorRef}>
              <Button
                className={classes.Typography}
                style={{ color: 'white' }}
                onClick={handleClick}
              >
                {options[selectedIndex]}
              </Button>
              <div style={{ flexGrow: 1 }} />
              <Button
                color="primary"
                size="small"
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
              >
                <KeyboardArrowDownIcon className={classes.ArrowIcon} />
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </div>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
      >
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList id="split-button-menu">
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  disabled={index === 2}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
}
