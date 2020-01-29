import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import QRCode from 'react-native-qrcode-svg';

import * as S from './styles';

export default function Menu({ translateY }) {
  return (
    <S.Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 250],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        }),
      }}
    >
      <S.Code>
        <QRCode
          value="https://github.com/LaksCastro"
          color="#6e10a0"
          backgroundColor="#fff"
          size={80}
        />
      </S.Code>
      <S.Nav>
        <S.NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <S.NavText>Ajuda</S.NavText>
        </S.NavItem>
        <S.NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <S.NavText>Perfil</S.NavText>
        </S.NavItem>
        <S.NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <S.NavText>Configurar cartão</S.NavText>
        </S.NavItem>
        <S.NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <S.NavText>Configurações do App</S.NavText>
        </S.NavItem>
      </S.Nav>
      <S.SignOutButton>
        <S.SignOutText>Sair</S.SignOutText>
      </S.SignOutButton>
    </S.Container>
  );
}
