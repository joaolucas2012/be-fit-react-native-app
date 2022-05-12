import React from 'react';

import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet,
    Dimensions,
} from "react-native";

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
        backgroundColor: "#565656",
        width: Dimensions.get('window').width * 0.80,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        // fontFamily: fonts.heading
    },
});