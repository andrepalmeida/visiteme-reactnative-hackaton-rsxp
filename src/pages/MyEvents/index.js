import React from 'react';
import { useSelector } from 'react-redux';

import BaseView from '../../components/BaseView';
import Events from '../../components/Events';

import { Container } from './styles';

export default function MyEvents() {
  const events = useSelector(state => state.userevents.events);

  return (
    <BaseView title="Meus Eventos">
      <Container>
        {events.map(data => (
          <Events key={`${data.id}`} data={data} />
        ))}
      </Container>
    </BaseView>
  );
}
