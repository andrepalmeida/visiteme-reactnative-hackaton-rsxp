import React from 'react';
import MapView from 'react-native-maps';

import BaseView from '../../components/BaseView';

import { Container } from './styles';

export default function Events() {
  return (
    <BaseView title="Eventos">
      <Container>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </Container>
    </BaseView>
  );
}
