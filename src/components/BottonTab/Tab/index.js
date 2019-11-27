import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, Label } from './styles';

export default function Tab({ name, onPress, label }) {
  return (
    <Container onPress={onPress}>
      <Icon name={name} color="#fff" size={30} />
      <Label>{label}</Label>
    </Container>
  );
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
