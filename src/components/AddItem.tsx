import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export interface Item {
    item: string,
    quantity: string,
}

const AddItem = () => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    return (
        <View>
            <Text style={styles.heading}>Add Shopping Item</Text>
            <View style={styles.form}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter item"
                    placeholderTextColor="grey"
                    value={item}
                    onChangeText={value => setItem(value)}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter quantity"
                    placeholderTextColor="grey"
                    keyboardType="numeric"
                    value={quantity}
                    onChangeText={value => setQuantity(value)}
                />
                <TouchableOpacity 
                    style={styles.addItemButton}
                    onPress={() => {}}
                >
                    <Text style={styles.buttonText}>Add Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        color: '#333',
        fontSize: 20,
        fontWeight: '700',
    },
    form: {
        marginTop: 30,
    },
    input: {
        color: 'grey',
        padding: 15,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    addItemButton: {
        backgroundColor: '#eb8634',
        paddingVertical: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff', 
        fontWeight: '500'
    },
})

export default AddItem;