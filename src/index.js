import React from 'react';

import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <>
    <Routes />
    <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
  </>
);

export default App;
