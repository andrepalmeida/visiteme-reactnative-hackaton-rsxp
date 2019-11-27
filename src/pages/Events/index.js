import React, { useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import BaseView from '../../components/BaseView';
import ViewEvent from '../../components/ViewEvent';

import { Container } from './styles';

const markers = [
  {
    title: 'Evento 1',
    description: 'O Evento 1 é muito Legal',
    date: '10/12/2019',
    hour: '14:00',
    latitude: -23.6528058,
    longitude: -46.6242712,
  },
  {
    title: 'Evento 2',
    description: 'O Evento 2 é muito Legal',
    date: '11/12/2019',
    hour: '13:00',
    latitude: -23.6582033,
    longitude: -46.602321,
  },
  {
    title: 'Evento 3',
    description: 'O Evento 3 é muito Legal',
    date: '12/12/2019',
    hour: '17:00',
    latitude: -23.6518844,
    longitude: -46.6124392,
  },
  {
    title: 'Evento 4',
    description: 'O Evento 4 é muito Legal',
    date: '15/12/2019',
    hour: '13:00',
    latitude: -23.6526234,
    longitude: -46.6142827,
  },
  {
    title: 'Evento 5',
    description: 'O Evento 5 é muito Legal',
    date: '16/12/2019',
    hour: '14:00',
    latitude: -23.6567653,
    longitude: -46.6097018,
  },
];

export default function Events() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function viewEventHandler(event) {
    setSelectedEvent(event);
    setIsVisible(true);
  }

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
              title={marker.title}
              description={marker.description}
              onPress={() => viewEventHandler(marker)}
            />
          ))}
        </MapView>
        <ViewEvent
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
          data={selectedEvent}
        />
      </Container>
    </BaseView>
  );
}
