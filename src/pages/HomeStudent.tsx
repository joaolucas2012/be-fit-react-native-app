import React from "react";

import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    Platform,
    Dimensions,
    StyleSheet
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import gymweight from "../assets/gymweight.png";
import play from "../assets/play.png";
import dumbbell from "../assets/dumbbell.png";
import time from "../assets/time.png";
import pushups from "../assets/pushups.png";
import running from "../assets/running.png";
import arrow from "../assets/arrow.png";
import home from "../assets/home.png";
import chat from "../assets/chat.png";
import progress from "../assets/progress.png";

import { TrainingCardButton } from "../components/TrainingCardButton";
import { IconButton } from "../components/IconButton";

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
                <TouchableOpacity
                    style={styles.dailyTrainingCard}
                    activeOpacity={0.7}
                >
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
                            <Image 
                                style={styles.playIcon}
                                source={play}
                                resizeMode="contain"
                            />
                            <Text style={styles.day}>
                                40 min
                            </Text>
                        </View>
                    </ View>
                    <Image
                        source={gymweight} 
                        style={styles.image}
                    />
                </TouchableOpacity>
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
                <View style={styles.classes}>
                        <Text style={styles.title}>
                            Novas aulas
                        </Text>
                        <TouchableOpacity 
                            style={styles.seeClassesButton}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.seeClassesButtonText}>
                                Ver todas
                            </Text>
                        </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={styles.showTrainingView}
                    activeOpacity={0.7}
                >
                    <View>
                        <Text style={styles.classTitle}>
                            Funcional
                        </Text>
                        <Text style={styles.classDescription}>
                        Agachamento com peso
                        </Text>
                    </View>
                    <View style={styles.classDuration}>
                        <Image 
                            style={styles.timeIcon}
                            source={time}
                            resizeMode="contain"
                        />
                        <Text style={styles.classDurationText}>
                            15min
                        </Text>
                        <Image 
                            style={styles.arrowIcon}
                            source={arrow}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.iconsFooter}>
                    <IconButton 
                        icon={home}
                        title="Home"
                        isActive={true}
                    />
                    <IconButton 
                        icon={chat}
                        title="Chat"
                    />
                    <IconButton 
                        icon={progress}
                        title="Progresso"
                    />
                </View>
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
    dailyTrainingCard: {
        backgroundColor: colors.primary,
        flexDirection: "row",
        height: Dimensions.get("window").height * 0.27,
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
        flexDirection: "row",
        width: "30%",
        height: "11%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5, 
    },
    playIcon: {
        marginRight: 5,
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
        height: Dimensions.get('window').width * 0.40,
        marginLeft: 20,
    },
    classes: {
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 20,
    },
    seeClassesButton: {
        width: "25%",
        borderRadius: 10,
        backgroundColor: colors.shinegreen,
        marginRight: 10,
    },
    seeClassesButtonText: {
        color: colors.primary,
        fontFamily: fonts.body,
        fontSize: 10,
        textAlign: "center",
        padding: 5,
    },
    showTrainingView: {
        backgroundColor: colors.white,
        borderRadius: 10,
        width: "90%",
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginLeft: 20,
        marginBottom: 25,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    classTitle: {
        fontFamily: fonts.heading,
        fontSize: 14,
        color: colors.heading,
    },
    classDescription: {
        fontFamily: fonts.body,
        fontSize: 10,
        color: colors.heading,
        lineHeight: 20,
    },
    timeIcon: {
        width: 13,
        height: 13,
        marginRight: 5,
    },
    classDurationText: {
        fontFamily: fonts.body,
        fontSize: 12,
        color: colors.heading,
    },
    classDuration: {
        flexDirection: "row",
        alignItems: "center",
    },
    arrowIcon: {
        height: 17,
        marginLeft: 20,
        marginTop: 5,
    },
    iconsFooter: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        position: "relative",
        height: 80,
    },
});