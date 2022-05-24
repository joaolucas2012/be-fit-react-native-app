import React from "react";

import {
    SafeAreaView,
    View,
    StyleSheet
} from "react-native";

import colors from "../styles/colors";

import { PersonalIconsFooter } from "../components/PersonalIconsFooter";
import { ClassmateInfoCard } from "../components/ClassmateInfoCard";
import { ButtonSecondary } from "../components/ButtonSecondary";
import { SectionHeader } from "../components/SectionHeader";

export function ClassmateData(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <SectionHeader 
                    title="Pedro Silva"
                />
                <ClassmateInfoCard 
                    title="Ficha do aluno"
                    name="Pedro Silva"
                    goal="resistência"
                    age="22 anos"
                    phone="(19)998765-4321"
                />
                <View style={styles.buttonView}>
                    <ButtonSecondary title="Treinos"/>
                    <ButtonSecondary title="Progresso"/>
                </View>
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
        justifyContent: "space-between",
    },
    content: {
        marginLeft: 20,
        marginRight: 10,
    },
    buttonView: {
        marginTop: 20,
        paddingRight: 20,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
});