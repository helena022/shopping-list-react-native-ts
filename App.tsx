import React, {useState} from 'react';
import type {ReactNode} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Header from './src/components/Header';
import AddItem, {Item} from './src/components/AddItem';


const App: () => ReactNode = () => {
  const [shoppingList, setShoppingList] = useState<Item[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <View style={styles.contentWrapper}>
        <AddItem 
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3'
  },
  contentWrapper: {
    padding: 20
  }
})

export default App;
