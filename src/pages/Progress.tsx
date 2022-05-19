import React from "react";

import {
    SafeAreaView,
    View,
    Text,
    Platform,
    StyleSheet
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { DateCard } from "../components/DateCard";
import { Button } from "../components/Button";
import { IconsFooter } from "../components/IconsFooter";

export function Progress(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.header}>
                    Progressos
                </Text>
                <DateCard
                    title="Data: 27/04/22"
                />
                <DateCard
                    title="Data: 27/03/22"
                />
            </View>
            <View>
                <View style={styles.buttonView}>
                    <Button
                        title="Adicionar Medidas"
                    />
                </View>
                <IconsFooter />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.lightgrey,
        justifyContent: "space-between",
    },
    content: {
        textAlign: "left",
        marginLeft: 20,
    },
    header: {
        fontFamily: fonts.heading,
        fontSize: 24,
        marginTop: Platform.OS === "android" ? 60 : 0,
        marginBottom: 30,
        textAlign: "left",
        color: colors.black,
    },
    footer: {
        alignItems: "center",
    },
    buttonView: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 60,
    },
});