import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Header from './components/Header';
import Details from './components/Details';
import Itens from './components/Itens';


export default function Basket({header, details, itens}) {


    return <ScrollView>
        <Header {...header} />
        <View style={styles.basket}>
            <Details {...details} />
            <Itens {...itens} />
        </View>   
    </ScrollView>

}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});



