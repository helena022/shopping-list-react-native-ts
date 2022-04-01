import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Item } from './AddItem';

const ListItem: React.FC<Item> = ({ item, quantity }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.itemName}>{item}</Text>
            <Text style={styles.itemQuantity}>x{quantity}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    },
    itemName: {
        color: '#333',
        fontWeight: '500',
      },
    itemQuantity: {
        color: '#333',
        padding: 6,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
      },
});

export default ListItem;