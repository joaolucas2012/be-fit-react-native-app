import React from 'react';

import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet,
    Dimensions,
} from "react-native";

import fonts from '../styles/fonts';
import colors from '../styles/colors';
interface ButtonProps extends TouchableOpacityProps{
    title: string;
};

export function Button({title, ...rest}:ButtonProps){
    return(
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.black,
        width: Dimensions.get('window').width * 0.80,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.complement
    },
});