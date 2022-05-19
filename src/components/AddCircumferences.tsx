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

export function AddCircumferences(){
    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <View>
                    <Text style={styles.circumferencesText}>
                        Circunferências
                    </Text>
                    <View style={styles.content}>
                        <View style={styles.shoulderView}>
                            <Text style={styles.header}>
                                Ombro
                            </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite"
                            />
                            <Text style={styles.header}>
                                cm
                            </Text>
                        </View>
                        <View style={styles.topBorderView}>
                            <Text style={styles.header}>
                                Tórax
                            </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite"
                            />
                            <Text style={styles.header}>
                                cm
                            </Text>
                        </View>
                        <View style={styles.topBorderView}>
                            <Text style={styles.header}>
                                Cintura
                            </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite"
                            />
                            <Text style={styles.header}>
                                cm
                            </Text>
                        </View>
                        <View style={styles.topBorderView}>
                            <Text style={styles.header}>
                                Abdômen
                            </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite"
                            />
                            <Text style={styles.header}>
                                cm
                            </Text>
                        </View>
                        <View style={styles.topBorderView}>
                            <Text style={styles.header}>
                                Quadril
                            </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite"
                            />
                            <Text style={styles.header}>
                                cm
                            </Text>
                        </View>
                        <View style={styles.topBorderView}>
                            <Text style={styles.header}>
                                Coxa esquerda
                            </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite"
                            />
                            <Text style={styles.header}>
                                cm
                            </Text>
                        </View>
                        <View style={styles.topBorderView}>
                            <Text style={styles.header}>
                                Coxa direita
                            </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Digite"
                            />
                            <Text style={styles.header}>
                                cm
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