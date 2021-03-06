import React from 'react';
import Accomodation from '../../SinglePageComponents/Accomodation';
import { Description } from '../../SinglePageComponents/Description';
import Destinations from '../../SinglePageComponents/Destinations';
import Enquire from '../../SinglePageComponents/Enquire';
import Gallery from '../../SinglePageComponents/Gallery';
import ImageSlider from '../../SinglePageComponents/ImageSlider';
import Reviews from '../../SinglePageComponents/Reviews';
import YatchServices from '../../SinglePageComponents/YatchServices';
import { Offer } from '../Offer';
import {
  Button,
  Container,
  Grid,
  Typography,
  IconButton
} from '@material-ui/core';
import SpecialOffer from '../../SinglePageComponents/SpecialOffer';
import MobileSpecialOffer from '../../SinglePageComponents/MobileSpecialOffer';
import ScrollSpecialOffer from '../../SinglePageComponents/ScrollSpecialOffer';
export default function Components() {
  return (
    <>
      <Container maxWidth="false" style={{ padding: '0%' }}>
        {true && <SpecialOffer />}
        <Offer />
        <ScrollSpecialOffer />
        <Description />
        <Gallery />
        <Accomodation />
        <ImageSlider />
        <YatchServices />
        <Destinations />
        <Reviews />
        <Enquire />
      </Container>
    </>
  );
}
