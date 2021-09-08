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
      color: '#2A398D',
      textAlign: 'center'
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

export default function MobileReviewsSlider() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: '60px',
    slidesToScroll: 2,
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
                value={2}
                readOnly
                style={{ paddingBottom: '2%' }}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.listitemText2}
              >
                “Thank you all so so so much for all of your help and patience
                with getting through this kosher week. My family had the best
                trip of their lives so I take my hat off to you all. Please pass
                on my sincere thanks also to Captain Askin and his team who I
                know showed patience and professionalism throughout what was no
                doubt a very challenging week.”
              </Typography>
              <Typography>August 2020</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
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
                value={2}
                readOnly
                style={{ paddingBottom: '2%' }}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.listitemText2}
              >
                “Thank you all so so so much for all of your help and patience
                with getting through this kosher week. My family had the best
                trip of their lives so I take my hat off to you all. Please pass
                on my sincere thanks also to Captain Askin and his team who I
                know showed patience and professionalism throughout what was no
                doubt a very challenging week.”
              </Typography>
              <Typography>August 2020</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Slider>
    </div>
  );
}
