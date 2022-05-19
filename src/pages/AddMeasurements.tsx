import React from "react";

import {
    View,
    StyleSheet,
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { SectionHeader } from "../components/SectionHeader";
import { AddWeightAndHeight } from "../components/AddWeightAndHeight";
import { AddCircumferences } from "../components/AddCircumferences";
import { StudentsIconsFooter } from "../components/StudentsIconsFooter";
import { Button } from "../components/Button";

export function AddMeasurements(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <SectionHeader 
                    title="Medidas"
                />
                <AddWeightAndHeight />
                <AddCircumferences />
                <View style={styles.buttonView}>
                    <Button
                        title="Salvar"
                    />
                </View>
            </View>
            <View style={styles.footer}>
                <StudentsIconsFooter />
            </View>
        </View>
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
        width: "100%",
        paddingLeft: 30,
        paddingRight: 15,
        justifyContent: "space-around",
    },
    bodyMetricsData: {
        fontFamily: fonts.title,
        fontSize: 16,
        color: colors.black,
        marginTop: 20,
    },
    buttonView: {
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 20,
    },
    footer: {
        marginTop: 50,
    },
});