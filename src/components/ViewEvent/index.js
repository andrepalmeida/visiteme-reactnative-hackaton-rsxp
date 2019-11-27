import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

import card from '../../assets/card-event.jpg';

import Button from '../Button';

import {
  Container,
  Content,
  Header,
  TouchableIcon,
  Title,
  Description,
  Image,
  Hbox,
  Time,
  Message,
} from './styles';

export default function ViewEvent({ isVisible, onClose, data }) {
  const [currentState, setCurrentState] = useState(0);

  function onCloseHandler() {
    setCurrentState(0);
    onClose();
  }

  return (
    <Container>
      <Modal isVisible={isVisible} onBackdropPress={onCloseHandler}>
        <Content>
          <Header>
            <TouchableIcon onPress={onCloseHandler}>
              <Icon name="close" color="#aaa" size={24} />
            </TouchableIcon>
          </Header>
          {data && currentState === 0 && (
            <>
              <Image source={card} resizeMode="cover" />
              <Title>{data.title}</Title>
              <Description>{data.description}</Description>
              <Hbox>
                <Time>{data.date}</Time>
                <Time>{data.hour}</Time>
              </Hbox>
              <Button
                label="Reservar vaga!"
                onPress={() => setCurrentState(1)}
              />
            </>
          )}
          {data && currentState > 0 && (
            <>
              <Title>{data.title}</Title>
              <Message>
                Para reservar sua vaga, efetue o download do documento abaixo,
                imprima, peça para um responsável assinar, e não esqueça de
                levar esse documento assinado com você no dia de sua visita!
              </Message>
              <Button label="Download da Autorização" onPress={() => {}} />
            </>
          )}
        </Content>
      </Modal>
    </Container>
  );
}

ViewEvent.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    hour: PropTypes.string,
  }),
};

ViewEvent.defaultProps = {
  data: null,
};
