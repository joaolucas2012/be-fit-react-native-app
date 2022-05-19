import React from "react";

import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    Platform,
    Dimensions,
    StyleSheet
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { SeeAllButton } from "../components/SeeAllButton";

export function HomePersonal(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
                BE FIT
            </Text>
            <View style={styles.content}>
                <Text style={styles.greeting}>
                    Olá Pedro,
                </Text>
                <View style={styles.classMatesHeader}>
                    <Text style={styles.textBold}>
                        Alunos
                    </Text>
                    <SeeAllButton />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.lightgrey,
    },
    content: {
        flex: 1,
        textAlign: "left",
        paddingHorizontal: 30,
    },
    header: {
        fontSize: 24,
        fontFamily: fonts.heading,
        marginTop: Platform.OS === "android" ? 40 : 0,
        marginBottom: 15,
        textAlign: "center",
        color: colors.black,
    },
    greeting: {
        fontFamily: fonts.complement,
        fontSize: 14,
        textAlign: "left",
    },
    classMatesHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
    },
    textBold: {
        fontFamily: fonts.heading,
        fontSize: 18,
        color: colors.black,
    },
});