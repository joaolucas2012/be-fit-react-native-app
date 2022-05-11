import React from "react";

import {
    View,
    Text,
    StyleSheet,
    Platform,
    TextInput,
    Dimensions,
    TouchableOpacity
} from "react-native";

export function Login(){
    return(
        <View style={styles.container}>
            <Text style={styles.header}>
                BE FIT
            </Text>
            <View>
                <TextInput 
                    style={styles.input}
                    placeholder="Usuário"
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Senha"
                />
            </View>
            <Text style={styles.text}>
                Recuperar senha
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text>
                    ENTRAR
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === 'android' ? 80 : 0,
    },
    header: {
        fontSize: 32,
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
        marginTop: 20,
        padding: 10,
    },
    text: {
        marginTop: 15,
        fontSize: 13,
    },
    button: {
        width: 230,
        height: 40,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "darkgrey",
        marginTop: 20,
    },
});