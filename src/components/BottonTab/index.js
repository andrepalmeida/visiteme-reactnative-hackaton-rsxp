import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import Tab from './Tab';

import { Container } from './styles';

function BottonTab({ navigation }) {
  function handleNavigation(screen) {
    navigation.navigate(screen);
  }

  return (
    <Container>
      <Tab name="public" onPress={() => handleNavigation('Events')} />
      <Tab name="dehaze" onPress={() => handleNavigation('MyEvents')} />
      <Tab name="account-circle" onPress={() => handleNavigation('Profile')} />
    </Container>
  );
}

export default withNavigation(BottonTab);

BottonTab.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
