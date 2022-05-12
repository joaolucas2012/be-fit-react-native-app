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
                <TouchableOpacity style={styles.textButton}>
                    <Text>
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
        marginTop: Platform.OS === "android" ? 60 : 0,
        textAlign: "center",
    },
    input: {
        width: Dimensions.get('window').width * 0.80,
        borderWidth: 1,
        borderColor: "darkgrey",
        backgroundColor: "lightgrey",
        borderRadius: 10,
        textAlign: "left",
        color:"darkgrey",
        fontSize: 17,
        marginBottom: 20,
        padding: 10,
    },
    text: {
        marginTop: 15,
        fontSize: 13,
    },
    textButton: {
        marginBottom: 20,
    },
});