import React from 'react';

import{
    View,
    Text,
    StyleSheet
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface exerciseProps{
    title: string;
};

export function ExerciseCard(
    {title} : exerciseProps
){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        marginBottom: 15,
        marginRight: 15,
        borderRadius: 20,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    text: {
        fontFamily: fonts.title,
        fontSize: 16,
        color: colors.black,
    },
});