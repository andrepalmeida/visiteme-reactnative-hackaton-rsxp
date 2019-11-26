import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

import { Container } from './styles';

export default function BaseView({ children, title, onBackPress }) {
  return (
    <Container>
      <Header title={title} onBackPress={onBackPress} />
      {children}
    </Container>
  );
}

BaseView.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onBackPress: PropTypes.func,
};

BaseView.defaultProps = {
  title: '',
  onBackPress: null,
};
