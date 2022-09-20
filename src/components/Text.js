import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function TextMontserrat({children, style}) {
    let styleText = (style?.fontWeight === 'bold' ? styles.textFamilyBold : styles.textFamily);
    return <Text style={[style, styleText]}>{children}</Text>
}

const styles = StyleSheet.create({
    textFamily: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textFamilyBold: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
});