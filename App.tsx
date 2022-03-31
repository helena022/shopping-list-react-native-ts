import React from 'react';
import type {ReactNode} from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import Header from './src/components/Header';


const App: () => ReactNode = () => {
  return (
    <SafeAreaView>
      <Header title="Test" />
    </SafeAreaView>
  );
};

export default App;
