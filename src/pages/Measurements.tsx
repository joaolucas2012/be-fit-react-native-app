import React from "react";

import {
    View,
    Text,
    StyleSheet,
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { SectionHeader } from "../components/SectionHeader";
import { WeightAndHeight } from "../components/WeightAndHeight";
import { Circumferences } from "../components/Circumferences";
import { IconsFooter } from "../components/IconsFooter";

export function Measurements(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <SectionHeader 
                    title="Medidas"
                />
                <Text style={styles.bodyMetricsData}>
                    Data: 27/04/2022
                </Text>
                <WeightAndHeight 
                    weight="70"
                    height="1.80"
                />
                <Circumferences
                    shoulder="95"
                    chest="80"
                    waist="65"
                    abdomen="63"
                    hip="71"
                    leftThigh="55"
                    rightThigh="55"
                />
            </View>
            <View style={styles.footer}>
                <IconsFooter />
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
    footer: {
        marginTop: 50,
    },
});