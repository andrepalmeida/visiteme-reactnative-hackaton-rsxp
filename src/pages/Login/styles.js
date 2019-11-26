import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 10px;
`;

export const Logo = styled.Image`
  margin: 70px 0 30px;
  width: 150px;
  height: 150px;
`;

export const Register = styled.TouchableOpacity`
  margin-top: 50px;
`;

export const RegisterText = styled.Text`
  color: ${theme.primary};
  font-weight: bold;
  font-size: 16px;
`;
