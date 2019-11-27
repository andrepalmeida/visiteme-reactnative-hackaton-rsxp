import styled from 'styled-components/native';

export const Container = styled.View``;

export const Content = styled.View`
  background: #fff;
  padding: 10px;
`;

export const Header = styled.View`
  flex-direction: row-reverse;
  margin-bottom: 5px;
`;

export const TouchableIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 130px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

export const Description = styled.Text`
  font-size: 13px;
  color: #aaa;
`;

export const Hbox = styled.View`
  margin: 15px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const Time = styled.Text`
  font-size: 13px;
  color: #aaa;
`;

export const Message = styled.Text`
  color: #333;
  font-size: 14px;
  margin-bottom: 20px;
`;
