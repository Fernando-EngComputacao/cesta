import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';

import topo from '../../../../assets/topo.png';
import TextMontserrat from '../../../components/Text';

export default function Header() {

    return <>
        <Image source={topo} style={styles.topo}></Image>
        <TextMontserrat style={styles.title}>Detalhe da Cesta</TextMontserrat>
    </>
}

const widthImgScreen = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: (578 / 768) * widthImgScreen,
    },
    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        lineHeight: 26,
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        padding: 16,
        
    },
});