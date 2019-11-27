import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label } from './styles';

export default function Button({ label, onPress, style }) {
  return (
    <Container style={style} onPress={onPress}>
      <Label>{label}</Label>
    </Container>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.shape({}),
};

Button.defaultProps = {
  style: {},
};
