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
import dumbbell from "../assets/dumbbell.png";
import time from "../assets/time.png";
import pushups from "../assets/pushups.png";
import running from "../assets/running.png";

import { TrainingCardButton } from "../components/TrainingCardButton";

export function HomeStudent(){
    const trainingData = {
        day_1:
        {
            title: "Quarta-feira",
            photo: {dumbbell},
            name: "Nome do treino",
            icon: {time},
            duration: "1h15min",
        },
        day_2:
        {
            title: "Quinta-feira",
            photo: {pushups},
            name: "Nome do treino",
            icon: {time},
            duration: "1h15min",
        },
        day_3:
        {
            title: "Sexta-feira",
            photo: {running},
            name: "Nome do treino",
            icon: {time},
            duration: "1h15min",
        },
    };

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
                BE FIT
            </Text>
            <View style={styles.content}>
                <View style={styles.texts}>
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
                    data={Object.keys(trainingData)}
                    renderItem={({item}) => (
                        <TrainingCardButton 
                            title="Quarta-feira"
                            photo={dumbbell}
                            name="Nome do treino"
                            icon={time}
                            duration="1h15min"
                        />
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
        backgroundColor: colors.lightgrey,
    },
    content: {
        flex: 1,
        textAlign: "left",
        justifyContent: "space-around",
    },
    header: {
        fontSize: 24,
        fontFamily: fonts.heading,
        marginTop: Platform.OS === "android" ? 40 : 0,
        marginBottom: 15,
        textAlign: "center",
        color: colors.black,
    },
    texts: {
        marginLeft: 20,
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
    card: {
        backgroundColor: colors.primary,
        flexDirection: "row",
        height: "35%",
        borderRadius: 20,
        paddingLeft: 20,
        marginVertical: 10,
        marginHorizontal: 25,
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
        marginLeft: 20,
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
        marginBottom: 10,
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
        height: "50%",
        marginLeft: 20,
    },
});