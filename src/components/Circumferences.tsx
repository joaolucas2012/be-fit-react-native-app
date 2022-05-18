import react from "react";

import {
    View,
    Text,
    StyleSheet
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface circumferencesProps{
    shoulder: string;
    chest: string;
    waist: string;
    abdomen: string;
    hip: string;
    leftThigh: string;
    rightThigh: string;
}

export function Circumferences(
    {
        shoulder,
        chest,
        waist,
        abdomen,
        hip,
        leftThigh,
        rightThigh
    }:circumferencesProps
){
    return(
        <View style={styles.container}>
            <Text style={styles.circumferencesText}>
                Circunferências
            </Text>
            <View style={styles.content}>
                <View style={styles.shoulderView}>
                    <Text style={styles.header}>
                        Ombro
                    </Text>
                    <Text style={styles.header}>
                        {`${shoulder}cm`}
                    </Text>
                </View>
                <View style={styles.topBorderView}>
                    <Text style={styles.header}>
                        Tórax
                    </Text>
                    <Text style={styles.header}>
                        {`${chest}cm`}
                    </Text>
                </View>
                <View style={styles.topBorderView}>
                    <Text style={styles.header}>
                        Cintura
                    </Text>
                    <Text style={styles.header}>
                        {`${waist}cm`}
                    </Text>
                </View>
                <View style={styles.topBorderView}>
                    <Text style={styles.header}>
                        Abdômen
                    </Text>
                    <Text style={styles.header}>
                        {`${abdomen}cm`}
                    </Text>
                </View>
                <View style={styles.topBorderView}>
                    <Text style={styles.header}>
                        Quadril
                    </Text>
                    <Text style={styles.header}>
                        {`${hip}cm`}
                    </Text>
                </View>
                <View style={styles.topBorderView}>
                    <Text style={styles.header}>
                        Coxa esquerda
                    </Text>
                    <Text style={styles.header}>
                        {`${leftThigh}cm`}
                    </Text>
                </View>
                <View style={styles.topBorderView}>
                    <Text style={styles.header}>
                        Coxa direita
                    </Text>
                    <Text style={styles.header}>
                        {`${rightThigh}cm`}
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
    circumferencesText: {
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
    shoulderView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    topBorderView: {
        borderTopColor: colors.lightgrey,
        borderTopWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});