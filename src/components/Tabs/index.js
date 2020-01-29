import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

export default function Tabs({ translateY }) {
  return (
    <S.Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.1],
          extrapolate: 'clamp',
        }),
      }}
    >
      <S.TabsContainer>
        <S.TabsItem>
          <Icon name="person-add" size={24} color="#fff" />
          <S.TabText>Indicar amigos</S.TabText>
        </S.TabsItem>
        <S.TabsItem>
          <Icon name="question-answer" size={24} color="#fff" />
          <S.TabText>Cobrar</S.TabText>
        </S.TabsItem>
        <S.TabsItem>
          <Icon name="arrow-downward" size={24} color="#fff" />
          <S.TabText>Depositar</S.TabText>
        </S.TabsItem>
        <S.TabsItem>
          <Icon name="arrow-upward" size={24} color="#fff" />
          <S.TabText>Transferir</S.TabText>
        </S.TabsItem>
        <S.TabsItem>
          <Icon name="lock" size={24} color="#fff" />
          <S.TabText>Bloquear cartão</S.TabText>
        </S.TabsItem>
      </S.TabsContainer>
    </S.Container>
  );
}
