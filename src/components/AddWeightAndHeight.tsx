import react from "react";

import {
    View,
    Text,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    StyleSheet
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function AddWeightAndHeight(){
    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <View>
                    <Text style={styles.bodyMetricsText}>
                        Medidas corporais
                    </Text>
                    <View style={styles.content}>
                        <View style={styles.weightView}>
                            <Text style={styles.header}>
                                Peso
                            </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite"
                            />
                            <Text style={styles.header}>
                                kg
                            </Text>
                        </View>
                        <View style={styles.heightView}>
                            <Text style={styles.header}>
                                Altura
                            </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite"
                            />
                            <Text style={styles.header}>
                                m
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
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
        fontSize: 14,
        color: colors.black,
        lineHeight: 35,
        width: "60%",
    },
    input: {
        fontFamily: fonts.complement,
        fontSize: 14,
        width: "30%",
        textAlign: "center",
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