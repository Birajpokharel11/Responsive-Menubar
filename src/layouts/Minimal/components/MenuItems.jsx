import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing(2)
  }
}));

export default function MenuListComposition() {
  const classes = useStyles();
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

  // return focus to the button when we transitioned from !open -> open

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={tabopen ? 'menu-list-grow' : undefined}
          onClick={handleToggle}
        >
          Toggle Menu Grow
        </Button>
        <Popper open={tabopen} anchorEl={anchorRef.current} role={undefined}>
          <Paper>
            <ClickAwayListener onClickAway={handleCloseTab}>
              <MenuList
                autoFocusItem={tabopen}
                id="menu-list-grow"
                onKeyDown={handleListKeyDown}
              >
                <MenuItem onClick={handleCloseTab}>ABOUT YOU</MenuItem>
                <MenuItem onClick={handleCloseTab}>DINNING</MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </div>
    </div>
  );
}
