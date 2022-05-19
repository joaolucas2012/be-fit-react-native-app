import React from "react";

import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    StyleSheet
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { StudentsIconsFooter } from "../components/StudentsIconsFooter";
import { ExerciseCard } from "../components/ExerciseCard";
import { SectionHeader } from "../components/SectionHeader";

export function Classes(){

    // const exercises = {
    //     ex1: {
    //         title: "Peitoral",
    //     },
    //     ex2: {
    //         title: "Perna",
    //     },
    //     ex3: {
    //         title: "Costas",
    //     },
    //     ex4: {
    //         title: "Braço",
    //     },
    //     ex5: {
    //         title: "Abdômen",
    //     },
    //     ex6: {
    //         title: "Ombros",
    //     },
    //     ex7: {
    //         title: "Funcional",
    //     },
    //     ex8: {
    //         title: "Alongamento",
    //     },
    // };

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <SectionHeader 
                    title="Aulas"
                />
                <Text style={styles.header}>
                    Exercícios
                </Text>
                <FlatList
                    data={[1,2,3,4,5,6,7,8]}
                    renderItem={( item ) => (
                        <ExerciseCard title="Peitoral" />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listStyle}
                    numColumns={2}
                />
            </View>
            <View>
                <StudentsIconsFooter />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.lightgrey,
        justifyContent: "space-between",
    },
    content: {
        marginLeft: 30,
    },
    header: {
        fontFamily: fonts.title,
        fontSize: 18,
        marginTop: 15,
        marginBottom: 15,
        textAlign: "left",
        color: colors.black,
    },
    listStyle: {
        marginRight: 20,
    },
});