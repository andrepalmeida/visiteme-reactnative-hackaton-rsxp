import React from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import BaseView from '../../components/BaseView';
import Input from '../../components/TxInput';
import Button from '../../components/Button';

import logo from '../../assets/logo.png';

import { Scroll, Container, Logo } from './styles';

export default function Register({ navigation }) {
  function handleSubmit() {
    Alert.alert('Cadastro realizado com sucesso!');
    // navigation.navigate('Login');
  }

  return (
    <BaseView title="Cadastro" onBackPress={() => navigation.navigate('Login')}>
      <Scroll>
        <Container>
          <Logo source={logo} resizeMode="contain" />
          <Input placeholder="Nome" />
          <Input placeholder="Email" />
          <Input placeholder="Senha" secureTextEntry />
          <Input placeholder="Endereço" />
          <Input placeholder="Cidade" />
          <Button label="Cadastrar" onPress={handleSubmit} />
        </Container>
      </Scroll>
    </BaseView>
  );
}

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
