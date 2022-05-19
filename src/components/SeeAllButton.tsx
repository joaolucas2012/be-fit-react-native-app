import react from "react";

import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function SeeAllButton(){
    return(
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.7}
        >
            <Text style={styles.buttonText}>
                Ver todas
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "25%",
        borderRadius: 10,
        backgroundColor: colors.shinegreen,
        marginRight: 10,
    },
    buttonText: {
        color: colors.primary,
        fontFamily: fonts.body,
        fontSize: 10,
        textAlign: "center",
        padding: 5,
    },
});