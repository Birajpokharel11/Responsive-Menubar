import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Pic1 from './GalleryPic/Pic1.svg';
import Pic2 from './GalleryPic/Pic2.svg';
import MobilePic1 from './Gallery MobileView/MobilePic1.svg';
import MobilePic2 from './Gallery MobileView/MobilePic2.svg';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

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
      height: 'auto'
    },
    [theme.breakpoints.down('420')]: {
      display: 'block',
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      height: 'auto'
    }
  }
}));

const itemData = [
  {
    img: Pic1,
    title: 'Image',
    author: 'author',
    cols: 2
  },
  {
    img: Pic2,
    title: 'Image',
    author: 'author',
    cols: 1
  },
  {
    img: Pic2,
    title: 'Image',
    author: 'author',
    cols: 1
  },
  {
    img: Pic2,
    title: 'Image',
    author: 'author',
    cols: 1
  },
  {
    img: Pic2,
    title: 'Image',
    author: 'author',
    cols: 1
  }
];
const MobileData = [
  {
    img: MobilePic1,
    title: 'Relaxing Jacuzzi',
    author: 'author',
    cols: 2
  },
  {
    img: MobilePic2,
    title: 'Gourmet Dining',
    author: 'author',
    cols: 1
  },
  {
    img: MobilePic2,
    title: 'Massage Services',
    author: 'author',
    cols: 1
  },
  {
    img: MobilePic2,
    title: 'Massage Services',
    author: 'author',
    cols: 1
  },
  {
    img: MobilePic2,
    title: 'Image',
    author: 'author',
    cols: 1
  }
];

export default function Gallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            style={{ height: '450px' }}
          >
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  aria-label={`star ${item.title}`}
                  className={classes.icon}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {console.log('Before update: ', itemData[0])}
      <Grid container spacing={2}>
        {MobileData.map((item) => (
          <Grid item>
            <img
              src={item.img}
              className={classes.MobileView}
              alt={item.title}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
