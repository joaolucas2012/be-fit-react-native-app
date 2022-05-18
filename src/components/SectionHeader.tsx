import React from "react";

import {
    View,
    Text,
    Image,
    Platform,
    StyleSheet,
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import leftArrow from "../assets/leftArrow.png";

interface metricsProps{
    title: string;
};

export function SectionHeader(
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
        flexDirection: "row",
        alignItems: "center",
        marginTop: Platform.OS === "android" ? 60 : 0,
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