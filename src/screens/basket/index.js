import React from 'react';

import Header from './components/Header';
import Details from './components/Details';
import renderItem from './components/Item';
import { FlatList, StyleSheet, View } from 'react-native';
import TextMontserrat from '../../components/Text';



export default function Basket({ header, details, itens }) {


    return <>
        <FlatList
            data={itens.listItens}
            renderItem={renderItem}
            keyExtractor={({ name }) => name}
            ListHeaderComponent={() => {
                return <>
                    <Header {...header} />
                    <View style={styles.basket}>
                        <Details {...details} />
                        <TextMontserrat style={ styles.title }> {itens.title} </TextMontserrat>
                    </View>
                </>

            }}
        />
    </>

}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    title: {
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
});



