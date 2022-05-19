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

import { SeeAllButton } from "../components/SeeAllButton";
import { InformationCard } from "../components/InformationCard";
import { Button } from "../components/Button";
import { PersonalIconsFooter } from "../components/PersonalIconsFooter";

export function HomePersonal(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
                BE FIT
            </Text>
            <View style={styles.content}>
                <Text style={styles.greeting}>
                    Olá Pedro!
                </Text>
                <View style={styles.classMatesHeader}>
                    <Text style={styles.textBold}>
                        Alunos
                    </Text>
                    <SeeAllButton />
                </View>
                <View>
                    <InformationCard
                        name="Pedro Silva"
                        goal="Objetivo: resistência"
                    />
                    <InformationCard
                        name="Camila Pereira"
                        goal="Objetivo: resistência"
                    />
                    <InformationCard
                        name="Bárbara Sales"
                        goal="Objetivo: resistência"
                    />
                </View>
            </View>
            <View style={styles.buttonView}>
                <Button 
                    title="Adicionar aluno"
                />
            </View>
            <PersonalIconsFooter />
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
        marginBottom: 30,
        textAlign: "center",
        color: colors.black,
    },
    greeting: {
        fontFamily: fonts.complement,
        fontSize: 14,
        textAlign: "left",
        marginBottom: 10,
    },
    classMatesHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 25,
    },
    textBold: {
        fontFamily: fonts.heading,
        fontSize: 17,
        color: colors.black,
    },
    buttonView: {
        alignItems: "center",
        marginBottom: 40,
    },
});