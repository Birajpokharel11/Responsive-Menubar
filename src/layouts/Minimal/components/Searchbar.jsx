import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '70%',
    height: '52.73px'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function Searchbar() {
  const classes = useStyles();

  return (
    <div style={{ display: 'flex' }}>
      <Paper component="form" className={classes.root}>
        <InputBase className={classes.input} placeholder="Email" />
      </Paper>
      <div style={{ flexGrow: 0.3 }} />
      <Button
        style={{ backgroundColor: 'white', marginnLeft: '10%' }}
        disableElevation
      >
        Search
      </Button>
    </div>
  );
}
