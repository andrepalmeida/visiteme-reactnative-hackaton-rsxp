import React from 'react';
import PropTypes from 'prop-types';

import card from '../../assets/card-event.jpg';

import { Container, Image, Title, Description, Hbox, Time } from './styles';

export default function Events({ data }) {
  return (
    <Container>
      <Image source={card} resizeMode="cover" />
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
      <Hbox>
        <Time>{data.date}</Time>
        <Time>{data.hour}</Time>
      </Hbox>
    </Container>
  );
}

Events.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    hour: PropTypes.string,
  }).isRequired,
};
