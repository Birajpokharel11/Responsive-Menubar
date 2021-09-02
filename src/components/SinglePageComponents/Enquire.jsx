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
    Yatch: {
      width: ' 100%',
      height: ' 1080px',
      objectFit: 'cover'
    }
  })
);
export default function Enquire() {
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.Container}>
      <Paper
        style={{
          background: 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(10px)',
          width: '820px ',
          height: '376px',
          paddingRight: '60px',
          paddingLeft: '60px',
          paddingTop: '60px',
          position: 'absolute',
          top: '20%',
          left: '10%'
        }}
      >
        <div>
          <Typography
            style={{
              width: '700px ',
              fontFamily: 'Lato',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '40px',
              lineHeight: '48px',
              color: 'white'
            }}
          >
            {' '}
            Get a custom quore for this luxury yacht now, we take care of
            everything so you don’t have to
          </Typography>
          <Button
            style={{
              background: '#F5F0E4',
              width: '190px',
              height: '52px',
              position: 'absolute',
              top: '50%'
            }}
          >
            Enquire
          </Button>
        </div>
      </Paper>
      <img src={Yatch} alt="HeroYatch" className={classes.Yatch} />
    </Container>
  );
}
