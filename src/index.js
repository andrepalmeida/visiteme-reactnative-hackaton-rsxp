import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes';

import theme from './theme';

import store from './store';

import { Container, Content } from './styles';

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <StatusBar backgroundColor={theme.primary} barStyle="light-content" />
        <Content>
          <Routes />
        </Content>
      </Container>
    </Provider>
  );
}
