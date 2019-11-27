import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  background: ${theme.primary};
  height: 60px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  flex: 1;
  text-align: center;
`;

export const IconCanvas = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
`;
