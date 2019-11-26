import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Tab({ name, onPress }) {
  return (
    <Container onPress={onPress}>
      <Icon name={name} color="#fff" size={30} />
    </Container>
  );
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
