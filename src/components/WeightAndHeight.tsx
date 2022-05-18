import react from "react";

import {
    View,
    Text,
    StyleSheet
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface measurementsProps{
    weight: string;
    height: string;
}

export function WeightAndHeight(
    {
        weight,
        height
    }:measurementsProps
){
    return(
        <View style={styles.container}>
            <Text style={styles.bodyMetricsText}>
                Medidas corporais
            </Text>
            <View style={styles.content}>
                <View style={styles.weightView}>
                    <Text style={styles.header}>
                        Peso
                    </Text>
                    <Text style={styles.header}>
                        {`${weight}kg`}
                    </Text>
                </View>
                <View style={styles.heightView}>
                    <Text style={styles.header}>
                        Altura
                    </Text>
                    <Text style={styles.header}>
                        {`${height}m`}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '95%',
    },
    bodyMetricsText: {
        fontFamily: fonts.title,
        fontSize: 18,
        color: colors.black,
        marginVertical: 10,
    },
    content: {
        backgroundColor: colors.white,
        borderRadius: 10,
        width: "100%",
        paddingHorizontal: 15,
    },
    header: {
        fontFamily: fonts.complement,
        fontSize: 18,
        color: colors.black,
        lineHeight: 40,
    },
    weightView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    heightView: {
        borderTopColor: colors.lightgrey,
        borderTopWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});