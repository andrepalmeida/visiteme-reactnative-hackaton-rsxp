import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.TouchableOpacity`
  background: ${theme.primary};
  height: 50px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;
