import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

import theme from './theme';

import { Container, Content } from './styles';

export default function App() {
  return (
    <Container>
      <StatusBar backgroundColor={theme.primary} barStyle="light-content" />
      <Content>
        <Routes />
      </Content>
    </Container>
  );
}
