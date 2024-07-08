// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View, Image, Button, Linking } from 'react-native';

const cars = [
    { id: '1', name: 'Lamborghini Aventador', image: 'https://picsum.photos/400/300?random=1', price: '500,000 USD' },
    { id: '2', name: 'Ferrari F8 Tributo', image: 'https://picsum.photos/400/300?random=2', price: '276,000 USD' },
    { id: '3', name: 'Porsche 911 Turbo S', image: 'https://picsum.photos/400/300?random=3', price: '207,000 USD' },
];

const CarList = () => {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Button
                title="Buy with Bitcoin"
                onPress={() => Linking.openURL('https://bitcoin.org')}
            />
            <Button
                title="Buy with Ethereum"
                onPress={() => Linking.openURL('https://ethereum.org')}
                style={styles.buttonMargin}
            />
        </View>
    );

    return (
        <FlatList
            data={cars}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#f5f5f5',
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    itemContainer: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        marginVertical: 8,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        alignItems: 'center',
    },
    image: {
        width: 400,
        height: 300,
        borderRadius: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    price: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 10,
    },
    buttonMargin: {
        marginTop: 10,
    }
});

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Luxury Car Dealer</Text>
            <CarList />
        </SafeAreaView>
    );
}