import React from 'react';
import type {ReactNode} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Header from './src/components/Header';


const App: () => ReactNode = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3'
  }
})

export default App;
