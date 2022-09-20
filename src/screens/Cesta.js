import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import TextMontserrat from '../components/Text';

import topo from '../../assets/topo.png';
import logoFarm from '../../assets/logo.png';
export default function Cesta() {

    return <>
        <Image source={topo} style={styles.topo}></Image>
        <TextMontserrat style={styles.title}>Detalhe da Cesta</TextMontserrat>

        <View style={styles.basket}>
            <TextMontserrat style={styles.nameBasket}>Cesta de Verduras</TextMontserrat>
            <View style={styles.viewFarmStyle}>
                <Image source={logoFarm} style={styles.logoFarmStyle}/>
                <TextMontserrat style={styles.farmName}>Furtado's Farm</TextMontserrat>
            </View>
            <TextMontserrat style={styles.description}>
                Uma cesta com produtos selecionados,
                cuidadosamente da fazenda Furtado's para sua cozinha.
            </TextMontserrat>
            <TextMontserrat style={styles.price}>R$ 40.00</TextMontserrat>
        </View>
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
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nameBasket: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft:12,
    },
    logoFarmStyle:{
        width: 32,
        height: 32,
    },
    viewFarmStyle: {
        flexDirection: "row",
        paddingVertical: 12,

    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }   

});

