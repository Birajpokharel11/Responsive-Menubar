import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Amat from './DestinationPic/Amat.svg';
import Tube from './DestinationPic/Tube.svg';
import Rating from '@material-ui/lab/Rating';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      boxShadow: 'none'
    },
    listHeader: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '32px',
      color: '#2A398D'
    },
    listText: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '18px',
      color: '#2A398D'
    },
    listitemText: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      color: '#2A398D'
    },
    listitemText2: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '16px',
      color: '#2A398D',
      paddingBottom: '2%'
    }
  })
);
function Reviews() {
  const [value, setValue] = React.useState(2);
  const classes = useStyles();
  return (
    <Paper
      elevation="0"
      style={{
        width: '100%',
        minheight: '870px',
        paddingBottom: '10%',
        background: ' #ffffff'
      }}
    >
      <Container
        style={{
          paddingTop: '5%'
        }}
      >
        <Typography
          className={classes.listHeader}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          Reviews from Our Customers
        </Typography>
        <Typography
          className={classes.listText}
          style={{ display: 'flex', textAlign: 'center', paddingTop: '48px' }}
        >
          A text like discover those destinations with your perfect yacht will
          be written here. Perfect location and the perfect yacht for your
          ultimate charter experience. Earth covered in water, there is always a
          new exciting destination to explore.
        </Typography>
      </Container>
      <Container
        maxWidth="md"
        style={{
          width: '100%',
          paddingTop: '3%'
        }}
      >
        <Grid container justifyContent="space-around">
          <Grid item xs>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent style={{ backgroundColor: '#F5F0E4' }}>
                  <Typography gutterBottom className={classes.listitemText}>
                    Cyclades Islands Greece
                  </Typography>
                  <Typography gutterBottom className={classes.listitemText}>
                    portugal
                  </Typography>
                  <Rating
                    name="read-only"
                    value={value}
                    readOnly
                    style={{ paddingBottom: '2%' }}
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.listitemText2}
                  >
                    “Thank you all so so so much for all of your help and
                    patience with getting through this kosher week. My family
                    had the best trip of their lives so I take my hat off to you
                    all. Please pass on my sincere thanks also to Captain Askin
                    and his team who I know showed patience and professionalism
                    throughout what was no doubt a very challenging week.”
                  </Typography>
                  <Typography>August 2020</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent style={{ backgroundColor: '#F5F0E4' }}>
                  <Typography gutterBottom className={classes.listitemText}>
                    Cyclades Islands Greece
                  </Typography>
                  <Typography gutterBottom className={classes.listitemText}>
                    portugal
                  </Typography>
                  <Rating
                    name="read-only"
                    value={value}
                    readOnly
                    style={{ paddingBottom: '2%' }}
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.listitemText2}
                  >
                    “Thank you all so so so much for all of your help and
                    patience with getting through this kosher week. My family
                    had the best trip of their lives so I take my hat off to you
                    all. Please pass on my sincere thanks also to Captain Askin
                    and his team who I know showed patience and professionalism
                    throughout what was no doubt a very challenging week.”
                  </Typography>
                  <Typography>August 2020</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default Reviews;
