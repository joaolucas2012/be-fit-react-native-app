import React from "react";

import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface DateCardProps extends TouchableOpacityProps{
    title: string;
    name: string;
    goal: string;
    age: string;
    phone: string;
};

export function ClassmateInfoCard({
    title,
    name,
    goal,
    age,
    phone,
    ...rest
}:DateCardProps){
    return(
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.7}
        >
            <Text 
                style={styles.cardTitle}
                {...rest}
            >
                {title}
            </Text >
            <Text style={styles.cardName}>
                {name}
            </Text>
            <Text style={styles.cardText}>
                Objetivo: {goal}{'\n'}Idade: {age}{'\n'}Telefone: {phone}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "95%",
        flexDirection: "column",
        textAlign: "left",
        justifyContent: "space-around",
        backgroundColor: colors.white,
        marginVertical: 25,
        paddingLeft: 30,
        paddingVertical: 15,
        borderRadius: 15,
    },
    cardTitle: {
        fontFamily: fonts.title,
        fontSize: 16,
        color: colors.black,
    },
    cardName: {
        fontFamily: fonts.title,
        fontSize: 14.4,
        color: colors.black,
        lineHeight: 20,
    },
    cardText: {
        fontFamily: fonts.body,
        fontSize: 10,
        color: colors.black,
        lineHeight: 20,
    },
    icon: {
        marginRight: 20,
    },
});