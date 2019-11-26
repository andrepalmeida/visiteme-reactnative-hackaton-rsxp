import React from 'react';

import BaseView from '../../components/BaseView';
import Input from '../../components/TxInput';
import Button from '../../components/Button';

import userImage from '../../assets/user.png';

import { Container, UserImage } from './styles';

export default function Profile() {
  return (
    <BaseView title="Meus Dados">
      <Container>
        <UserImage source={userImage} resizeMode="contain" />
        <Input placeholder="Nome" />
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Input placeholder="Escola" />
        <Button label="Salvar" onPress={() => {}} />
      </Container>
    </BaseView>
  );
}
