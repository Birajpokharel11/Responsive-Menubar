/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Slider from 'react-slick';
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
      style={{
        ...style,
        right: '100px',
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
        left: '100px',
        zIndex: '1',
        display: 'block'
      }}
      onClick={onClick}
    />
  );
}

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    centerMode: true,
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
        {MobileData.map((item, index) => (
          <div>
            <img
              src={item.img}
              data-cy={`images-slider-pic-${index}`}
              style={{
                width: '98%',
                maxheight: '500px',
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
