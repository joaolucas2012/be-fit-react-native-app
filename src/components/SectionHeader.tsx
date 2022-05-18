import React from "react";

import {
    View,
    Text,
    Image,
    StyleSheet,
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import leftArrow from "../assets/leftArrow.png";

interface metricsProps{
    title: string;
};

export function Metrics(
    {title}:metricsProps)
{
    return(
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={leftArrow}
            />
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "left",
    },
    icon: {
        marginRight: 20,
    },
    text: {
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.black,
    },
});