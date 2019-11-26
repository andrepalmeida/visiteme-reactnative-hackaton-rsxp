import React from 'react';

import BaseView from '../../components/BaseView';
import Events from '../../components/Events';

import { Container } from './styles';

const data = {
  id: 4,
  title: 'Nome do Evento',
  date: '10/10/2019',
  hour: '14:00',
  description: 'Descrição do Evento',
};

export default function MyEvents() {
  return (
    <BaseView title="Meus Eventos">
      <Container>
        <Events data={data} />
        <Events data={data} />
        <Events data={data} />
        <Events data={data} />
      </Container>
    </BaseView>
  );
}
