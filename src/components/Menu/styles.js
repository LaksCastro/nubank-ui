import styled from 'styled-components/native';

import { StyleSheet, Animated } from 'react-native';

export const Container = styled(Animated.ScrollView)``;

export const Code = styled.View`
  overflow: hidden;
  padding: 12px;
  background: #fff;
  border-radius: 4px;
  align-self: center;
`;

export const Nav = styled.View`
  align-self: center;
  margin-top: 30px;
  width: 80%;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.5);
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.5);
`;

export const NavItem = styled.TouchableOpacity`
  flex-direction: row;
  padding: 12px 0;
  align-items: center;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.5);
`;

export const NavText = styled.Text`
  color: #fff;
  margin-left: 24px;
  font-size: 15px;
`;
export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  align-self: center;
  border-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 12px;
  width: 80%;
`;
export const SignOutText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;
