import React from "react";

import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    Image,
    StyleSheet
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import arrow from "../assets/arrow.png";

interface DateCardProps extends TouchableOpacityProps{
    title: string;
};

export function DateCard({
    title,
    ...rest
}:DateCardProps){
    return(
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.7}
        >
            <Text 
                style={styles.cardText}
                {...rest}
            >
                {title}
            </Text>
            <Image
                style={styles.icon}
                source={arrow}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "95%",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "space-between",
        backgroundColor: colors.white,
        marginBottom: 15,
        paddingLeft: 20,
        paddingVertical: 15,
        borderRadius: 20,
    },
    cardText: {
        fontFamily: fonts.title,
        fontSize: 16,
        color: colors.black,
    },
    icon: {
        marginRight: 20,
    },
});