import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import Details from './components/Details';


export default function Basket({header, details}) {


    return <>
        <Header {...header} />
        <View style={styles.basket}>
            <Details {...details} />
        </View>   
    </>

}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});



