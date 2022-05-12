import React from "react";

import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    Platform,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from "react-native";

import { Button } from "../components/Button";

import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function Login(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
                BE FIT
            </Text>
            <View style={styles.content}>
                <TextInput 
                    style={styles.input}
                    placeholder="Usuário"
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Senha"
                />
                <TouchableOpacity>
                    <Text style={styles.textButton}>
                        Recuperar senha
                    </Text>
                </TouchableOpacity>
                <Button 
                    title="ENTRAR"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontSize: 32,
        fontFamily: fonts.heading,
        marginTop: Platform.OS === "android" ? 60 : 0,
        textAlign: "center",
        color: colors.black,
    },
    input: {
        width: Dimensions.get('window').width * 0.80,
        borderWidth: 1,
        borderColor: colors.lightgrey,
        backgroundColor: colors.lightgrey,
        borderRadius: 10,
        textAlign: "left",
        color: colors.text,
        fontSize: 12,
        fontFamily: fonts.complement,
        marginBottom: 20,
        padding: 10,
    },
    textButton: {
        marginBottom: 20,
        fontFamily: fonts.complement,
        fontSize: 12,
        color: colors.text,
        marginLeft: 10,
    },
});