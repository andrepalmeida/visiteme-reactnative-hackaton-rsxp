import styled from 'styled-components/native';
import theme from './theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${theme.primary};
`;

export const Content = styled.View`
  flex: 1;
  background: #fff;
`;
