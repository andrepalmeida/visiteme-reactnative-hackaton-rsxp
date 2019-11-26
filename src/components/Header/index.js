import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import { Container, Title, IconCanvas } from './styles';

function Header({ title, onBackPress }) {
  return (
    <Container>
      <IconCanvas onPress={onBackPress}>
        {onBackPress && <Icon name="chevron-left" size={30} color="#fff" />}
      </IconCanvas>
      <Title>{title}</Title>
      <IconCanvas />
    </Container>
  );
}

export default withNavigation(Header);

Header.propTypes = {
  onBackPress: PropTypes.func,
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  onBackPress: null,
};
