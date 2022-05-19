import React from "react";

import {
    View,
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
    name: string;
    goal: string;
};

export function InformationCard({
    name,
    goal,
    ...rest
}:DateCardProps){
    return(
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.7}
        >
            <View style={styles.TextsView}>
                <Text 
                    style={styles.cardName}
                    {...rest}
                >
                    {name}
                </Text>
                <Text 
                    style={styles.cardText}
                    {...rest}
                >
                    {goal}
                </Text>
            </View>
            <Image
                style={styles.icon}
                source={arrow}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "left",
        justifyContent: "space-between",
        backgroundColor: colors.white,
        marginBottom: 15,
        paddingLeft: 60,
        paddingVertical: 8,
        borderRadius: 15,
    },
    TextsView: {
        justifyContent: "space-between",
    },
    cardName: {
        fontFamily: fonts.heading,
        fontSize: 14,
        color: colors.black,
        marginBottom: 10,
    },
    cardText: {
        fontFamily: fonts.body,
        fontSize: 10,
        color: colors.black,
    },
    icon: {
        marginRight: 20,
    },
});