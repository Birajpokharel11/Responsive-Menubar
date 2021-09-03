import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography
} from '@material-ui/core';
import Yatch from './EnqueriesPic/yatch.svg';
const useStyles = makeStyles((theme) =>
  createStyles({
    Container: {
      width: '100%',
      padding: '0%',
      position: 'relative'
    },
    Paper: {
      background: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
      width: '820px ',
      height: '376px',
      paddingRight: '60px',
      paddingLeft: '60px',
      paddingTop: '60px',
      paddingBottom: '4%',
      position: 'absolute',
      top: '20%',
      left: '3%',
      [theme.breakpoints.down('1440')]: {
        width: '48%',
        paddingTop: '4%'
      },
      [theme.breakpoints.down('768')]: {
        width: '75%',
        height: '280px',
        paddingRight: '4%',
        paddingLeft: '4%',
        paddingTop: '8%',
        paddingBottom: '0%'
      }
    },
    Typography: {
      minwidth: '700px ',
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '40px',
      lineHeight: '48px',
      color: 'white',
      [theme.breakpoints.down('1024')]: {
        fontSize: '32px',
        lineHeight: '38px'
      },
      [theme.breakpoints.down('768')]: {
        fontWeight: 'normal',
        fontSize: '22px',
        lineHeight: '29px'
      }
    },
    Yatch: {
      width: ' 100%',
      height: ' 1080px',
      objectFit: 'cover',
      display: 'block',
      [theme.breakpoints.down('1024')]: {
        height: '859px'
      },
      [theme.breakpoints.up('2040')]: {
        height: '1480px'
      }
    },
    Button: {
      background: '#F5F0E4',
      width: '190px',
      height: '52px',
      position: 'absolute',
      top: '50%',
      [theme.breakpoints.down('1440')]: {
        marginTop: '10%'
      },
      [theme.breakpoints.down('1024')]: {
        marginTop: '4%'
      },
      [theme.breakpoints.down('425')]: {
        marginTop: '10%'
      }
    },
    ButtonTypography: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '550',
      fontSize: '18px',
      lineHeight: '22px',
      color: '#2A398D'
    }
  })
);
export default function Enquire() {
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.Container}>
      <Paper className={classes.Paper}>
        <div>
          <Typography className={classes.Typography}>
            Get a custom quore for this luxury yacht now, we take care of
            everything so you don’t have to
          </Typography>
          <Button className={classes.Button}>
            <Typography className={classes.ButtonTypography}>
              Enquire
            </Typography>
          </Button>
        </div>
      </Paper>
      <img src={Yatch} alt="HeroYatch" className={classes.Yatch} />
    </Container>
  );
}
