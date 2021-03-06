import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/logo.png';

import TxInput from '../../components/TxInput';
import Button from '../../components/Button';

import { Container, Logo, Register, RegisterText } from './styles';

export default function Login({ navigation }) {
  function handleSubmit() {
    navigation.navigate('MainNavigator');
  }

  return (
    <Container>
      <Logo source={logo} resizeMode="contain" />
      <TxInput placeholder="Email" value="joaosilva@gmail.com" />
      <TxInput placeholder="Senha" secureTextEntry value="123456" />
      <Button label="Entrar" onPress={handleSubmit} />

      <Register onPress={() => navigation.navigate('Register')}>
        <RegisterText>Ainda não é cadastrado? Cadastre-se aqui</RegisterText>
      </Register>
    </Container>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
