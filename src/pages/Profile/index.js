import React from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import BaseView from '../../components/BaseView';
import Input from '../../components/TxInput';
import Button from '../../components/Button';

import userImage from '../../assets/aluno.jpg';

import { Container, UserImage } from './styles';

export default function Profile({ navigation }) {
  return (
    <BaseView title="Meus Dados">
      <Container>
        <UserImage source={userImage} resizeMode="contain" />
        <Input placeholder="Nome" value="João Silva" />
        <Input placeholder="Email" value="joaosilva@gmail.com" />
        <Input placeholder="Senha" />
        <Input placeholder="Escola" value="Escola Estadual Santa Terezinha" />
        <Button
          label="Salvar"
          onPress={() => Alert.alert('Dados alterados com sucesso!')}
        />
        <Button
          style={{ backgroundColor: '#aaa', marginTop: 15 }}
          label="Logout"
          onPress={() => navigation.navigate('Login')}
        />
      </Container>
    </BaseView>
  );
}

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
