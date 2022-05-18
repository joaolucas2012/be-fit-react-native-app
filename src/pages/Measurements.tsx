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

export function Measurements(){
    return(
        <View style={styles.container}>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.lightgrey,
        paddingLeft: 30,
    },
    bodyMetricsData: {
        fontFamily: fonts.title,
        fontSize: 16,
        color: colors.black,
        marginTop: 20,
    },
});