import React from 'react';
import { Image, StyleSheet, View } from 'react-native';


import TextMontserrat from '../../../components/Text';
import logoFarm from '../../../../assets/logo.png';

export default function Details() {
    return <>
        
        <TextMontserrat style={styles.nameBasket}>Cesta de Verduras</TextMontserrat>
            <View style={styles.viewFarmStyle}>
                <Image source={logoFarm} style={styles.logoFarmStyle} />
                <TextMontserrat style={styles.farmName}>Furtado's Farm</TextMontserrat>
            </View>
            <TextMontserrat style={styles.description}>
                Uma cesta com produtos selecionados,
                cuidadosamente da fazenda Furtado's para sua cozinha.
            </TextMontserrat>
            <TextMontserrat style={styles.price}>R$ 40.00</TextMontserrat>
        
    </>
}

const styles = StyleSheet.create({
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