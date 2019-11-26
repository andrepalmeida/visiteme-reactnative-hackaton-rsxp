import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import BaseView from '../../components/BaseView';

import { Container } from './styles';

const markers = [
  { latitude: -23.6528058, longitude: -46.6242712 },
  { latitude: -23.6582033, longitude: -46.602321 },
  { latitude: -23.6518844, longitude: -46.6124392 },
  { latitude: -23.6526234, longitude: -46.6142827 },
  { latitude: -23.6567653, longitude: -46.6097018 },
];

export default function Events() {
  return (
    <BaseView title="Eventos">
      <Container>
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: -23.6487979,
            longitude: -46.6224215,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {markers.map(marker => (
            <Marker
              key={`${marker.latitude}-${marker.longitude}`}
              coordinate={marker}
              title="Título do Evento"
              description="Descrição do Evento"
            />
          ))}
        </MapView>
      </Container>
    </BaseView>
  );
}
