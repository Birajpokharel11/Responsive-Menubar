/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Slider from 'react-slick';
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingLeft: '20px',
    paddingRight: '20px',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  imageList: {
    width: '100%',
    height: 905,
    [theme.breakpoints.down('500')]: {
      display: 'none',
      MarginLeft: '100px',
      maxwidth: '80%',
      height: 'auto'
    }
  },
  MobileView: {
    display: 'none',

    [theme.breakpoints.down('500')]: {
      display: 'block',
      width: '100%',
      marginLeft: '15px',
      height: 'auto',
      background:
        'linear-gradient(354.05deg, #091527 4.18%, rgba(9, 21, 39, 0.914539) 43.61%, rgba(9, 21, 39, 0) 94.76%)'
    },
    [theme.breakpoints.down('420')]: {
      display: 'block',
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      height: 'auto'
    }
  },
  typography: {
    fontFamily: 'lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fortSize: '24px',
    color: 'white',
    position: 'relative',
    display: 'none',
    background:
      'linear-gradient(180.05deg, #091527 4.18%, rgba(9, 21, 39, 0.914539) 43.61%, rgba(9, 21, 39, 0) 94.76%)',
    [theme.breakpoints.down('500')]: {
      display: 'block',
      left: '4.30%',
      top: '18%',
      padding: '8%'
    },
    [theme.breakpoints.down('380')]: {
      display: 'block',
      left: '0%',
      top: '18%',
      padding: '8%'
    }
  },
  TitleBar: {
    width: '100%',
    height: '80px',
    background:
      'linear-gradient(180.05deg, #091527 4.18%, rgba(9, 21, 39, 0.914539) 43.61%, rgba(9, 21, 39, 0) 94.76%)'
  }
}));

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        right: '10px',
        zIndex: '1',
        display: 'block'
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: '10px',
        zIndex: '1',
        display: 'block'
      }}
      onClick={onClick}
    />
  );
}

export default function MobileSlider() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        <Card className={classes.root} elevation={0}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={Amat}
              style={{
                width: '400px',
                height: '400px'
              }}
              title="Contemplative Reptile"
            />
            <CardContent style={{ backgroundColor: '#F5F0E4' }}>
              <Typography
                gutterBottom
                style={{ textAlign: 'center' }}
                className={classes.listitemText}
              >
                Cyclades Islands Greece
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.listitemText2}
              >
                A perfect yacht charter getaway in probably one of the most
                romantic, beautiful, and charming place on earth.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root} elevation={0}>
          <CardActionArea>
            <CardMedia
              style={{
                width: '400px',
                height: '400px',
                objectFit: 'contain'
              }}
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={Tube}
              title="Contemplative Reptile"
            />
            <CardContent
              style={{ backgroundColor: '#F5F0E4' }}
              className={classes.listitemText}
            >
              <Typography gutterBottom style={{ textAlign: 'center' }}>
                Dalmatian Islands Croatia
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.listitemText2}
              >
                The Cyclades are a group of Greek Islands, best known for the
                islands of Santorini and Mykonos.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Slider>
    </div>
  );
}
