/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MobilePic1 from './Gallery MobileView/MobilePic1.svg';
import MobilePic2 from './Gallery MobileView/MobilePic2.svg';

const MobileData = [
  {
    img: MobilePic1,
    title: 'Image',
    author: 'author',
    cols: 2
  },
  {
    img: MobilePic2,
    title: 'Image',
    author: 'author',
    cols: 1
  },
  {
    img: MobilePic2,
    title: 'Image',
    author: 'author',
    cols: 1
  },
  {
    img: MobilePic2,
    title: 'Image',
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
}

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
    <div style={{ marginLeft: '100px', marginRight: '100px' }}>
      <h2>Custom Arrows</h2>
      <Slider {...settings}>
        {MobileData.map((item) => (
          <div>
            <img
              src={item.img}
              style={{
                width: '95%',
                maxheight: '500px',
                objectFit: 'cover',
                display: 'flex',
                gap: '2rem'
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
