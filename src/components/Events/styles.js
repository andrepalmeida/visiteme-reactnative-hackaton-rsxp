import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
  margin-bottom: 20px;
  border-width: 1px;
  border-color: #aaa;
  border-radius: 8px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 130px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #333;
  margin: 10px 0;
`;

export const Description = styled.Text`
  font-size: 13px;
  color: #aaa;
`;

export const Hbox = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Time = styled.Text`
  font-size: 13px;
  color: #aaa;
`;
