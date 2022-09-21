import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import TextMontserrat from '../../../components/Text';

export default function Item({ item: { name, image } }) {


    return <View key={name} style={styles.itemList}>
        <Image source={image} style={styles.imageList} />
        <TextMontserrat style={styles.textList}>{name}</TextMontserrat>
    </View>
}

const styles = StyleSheet.create({
    itemList: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
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
