import React, {useState} from 'react';
import type {ReactNode} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  ScrollView
} from 'react-native';
import Header from './src/components/Header';
import AddItem, {Item} from './src/components/AddItem';
import ListItem from './src/components/ListItem';


const App: () => ReactNode = () => {
  const [shoppingList, setShoppingList] = useState<Item[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <View style={{flex: 1, padding: 20}}>
        <AddItem 
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        />
        <FlatList 
        style={styles.list}
          data={shoppingList}
          keyExtractor={(item, index) => `${item.item}-${index}`}
          renderItem={({item})=> (
            <ListItem item={item.item} quantity={item.quantity} />
          )}
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
  list: {
    marginTop: 10
  }
})

export default App;
