import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet,
} from "react-native";

import fonts from '../styles/fonts';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps{
    title: string;
};

export function ButtonSecondary({
    title,
    ...rest
}: ButtonProps){
    return(
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.7}
        >
            <Text 
                style={styles.header}
                {...rest}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "45%",
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    header: {
        fontFamily: fonts.title,
        fontSize: 16,
        color: colors.white,
    },
});