import React from "react";

import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    Platform,
    StyleSheet
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import gymweight from "../assets/gymweight.png";

export function HomeStudent(){
    const weekDays = [
        "Segunda-feira    ",
        "Terça-feira    ",
        "Quarta-feira     ",
        "Quinta-feira     ",
        "Sexta-feira      "
    ];

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
                BE FIT
            </Text>
            <View style={styles.content}>
                <View>
                    <Text style={styles.greeting}>
                        Olá Lina,
                    </Text>
                    <Text style={styles.textBold}>
                        Bora treinar
                    </Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.leftView}>
                        <View style={styles.dayCard}>
                            <Text style={styles.day}>
                                terça-feira
                            </Text>
                        </View>
                        <Text style={styles.trainingName}>
                            Nome do {'\n'}
                            treino
                        </Text>
                        <Text style={styles.subtitle}>
                            5 exercícios    
                        </Text>
                        <View style={styles.durationCard}>
                            <Text style={styles.day}>
                                40 min
                            </Text>
                        </View>
                    </ View>
                    <Image
                        source={gymweight} 
                        style={styles.image}
                    />
                </View>
                <Text style={styles.title}>
                    Próximos exercícios
                </Text>
                <FlatList 
                    data={weekDays}
                    renderItem={({item}) => (
                        <Text>{item}</Text>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.weekDaysList}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    content: {
        flex: 1,
        textAlign: "left",
        justifyContent: "space-around",
        marginHorizontal: 25,
    },
    header: {
        fontSize: 24,
        fontFamily: fonts.heading,
        marginTop: Platform.OS === "android" ? 60 : 0,
        marginBottom: 15,
        textAlign: "center",
        color: colors.black,
    },
    greeting: {
        fontFamily: fonts.complement,
        fontSize: 14,
        textAlign: "left",
    },
    textBold: {
        fontFamily: fonts.heading,
        fontSize: 24,
        textAlign: "left",
        lineHeight: 33,
        marginBottom: 5,
    },
    dayCard: {
        backgroundColor: colors.lightgreen,
        width: "35%",
        height: "12%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 12,
    },
    card: {
        backgroundColor: colors.primary,
        flexDirection: "row",
        width: "100%",
        height: "35%",
        borderRadius: 20,
        paddingLeft: 20,
        marginVertical: 10,
    },
    day: {
        color: colors.white,
        fontFamily: fonts.body,
        fontSize: 14,
    },
    trainingName: {
        color: colors.white,
        fontFamily: fonts.heading,
        fontSize: 22,
    },
    title: {
        fontFamily: fonts.title,
        color: colors.black,
        fontSize: 18,
        textAlign: "left",
        marginVertical: 10,
    },
    subtitle: {
        color: colors.white,
        fontFamily: fonts.body,
        fontSize: 14,
        marginBottom: 5,
    },
    durationCard: {
        backgroundColor: colors.blackgreen,
        width: "30%",
        height: "10%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    leftView: {
        flex: 1,
        position: "relative",
        justifyContent: "space-around",
    },
    image: {
        flex: 1,
        position: "absolute",
        marginLeft: "41%",
        marginBottom: "50%",
        width: "77%",
    },
    weekDaysList: {

    },
});