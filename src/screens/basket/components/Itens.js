import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import TextMontserrat from '../../../components/Text';

export default function Itens({title, listItens}) {
    return <>
        <TextMontserrat style={styles.title}>{title}</TextMontserrat>
        {listItens.map(({name, image}) => {
            return <View key={name} style={styles.itemList}>
                <Image source={image} style={styles.imageList} />
                <TextMontserrat style={styles.textList}>{ name }</TextMontserrat>
            </View>
        })}
    </>
}

const styles = StyleSheet.create({
    title: {
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    itemList: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: 'center',
    }, 
    imageList: {
        width: 46,
        height: 46,
    },
    textList: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }

});