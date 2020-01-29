import React from 'react';

import Logo from '~/assets/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';

export default function header() {
  return (
    <S.Container>
      <S.Top>
        <S.Logo source={Logo} />
        <S.Title>Laks Castro</S.Title>
      </S.Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </S.Container>
  );
}
