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
export default function Components() {
  return (
    <>
      <Container maxWidth="false" style={{ padding: '0%' }}>
        {false && <SpecialOffer />}
        <Offer />
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
