import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import Vector from './SpecialOfferPic/Vector.svg';

import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { Container } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content'
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120
  },
  formControlLabel: {
    marginTop: theme.spacing(1)
  },
  ButtonTypo: {
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '23px',
    color: 'white'
  },
  Title: {
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '32px',
    lineHeight: '38px',
    color: '#2A398D',
    minWidth: '505px',
    minHeight: '38px',
    textAlign: 'center'
  },
  SubHeading: {
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '18px',
    color: '#2A398D',
    minWidth: '755px',
    maxHeight: '22px',
    textAlign: 'center'
  },
  Border: {
    border: '3px dashed #AB3996',
    width: '92%',
    marginLeft: '2%',
    marginRight: '2%',
    padding: '2%',
    background: '#F7F7F7'
  },
  Reservation: {
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '24px',
    color: '#2A398D'
  },
  Checkin: {
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#2A398D',
    paddingRight: '2%'
  },
  CheckOut: {
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '21.6px',
    color: '#2A398D'
  }
}));

export default function MaxWidthDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        style={{
          minWidth: '190px',
          maxHeight: '52px',
          backgroundColor: '  #AB3996'
        }}
        onClick={handleClickOpen}
      >
        <Typography className={classes.ButtonTypo}>View Offer</Typography>
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth="md"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle className={classes.Title}>
          {' '}
          There is a special offer for this yacht!
        </DialogTitle>
        <DialogTitle className={classes.SubHeading}>
          I’m the offer description text. Nice to meet you. You can write on me
          whatever you want.
        </DialogTitle>
        <DialogContent>
          <Box>
            <Paper className={classes.Border}>
              <Grid container direction="row" alignItems="center">
                <Grid item md={8}>
                  <Typography className={classes.Reservation}>
                    Aresteas Reservation Details
                  </Typography>
                  <br />
                  <div
                    style={{ display: 'flex', justifyContent: 'flex-start' }}
                  >
                    <Typography className={classes.Checkin}>
                      Check-in Date / Destination
                    </Typography>
                    <Typography className={classes.CheckOut}>
                      21.05.2021 / Marmaris
                    </Typography>
                  </div>
                  <br />
                  <div
                    style={{ display: 'flex', justifyContent: 'flex-start' }}
                  >
                    <Typography className={classes.Checkin}>
                      Check-out Date / Destination
                    </Typography>
                    <Typography className={classes.CheckOut}>
                      31.05.2021 / Marmaris
                    </Typography>
                  </div>
                </Grid>
                <div style={{ flexGrow: '1' }} />
                <Grid item md>
                  <Typography
                    style={{
                      textAlign: 'center',
                      textDecorationLine: 'line-through'
                    }}
                  >
                    € 155.000{' '}
                  </Typography>
                  <br />
                  <Typography style={{ textAlign: 'center' }}>
                    € 155.000{' '}
                  </Typography>
                  <br />
                  <Button
                    style={{
                      minWidth: '190px',
                      maxHeight: '52px',
                      backgroundColor: '  #AB3996'
                    }}
                    onClick={handleClickOpen}
                  >
                    <Typography className={classes.ButtonTypo}>
                      Claim Now
                    </Typography>
                  </Button>
                  <br />
                  <br />

                  <Typography style={{ textAlign: 'center' }}>
                    Free cancellation
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
