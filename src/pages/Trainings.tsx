import React from "react";

import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet
} from "react-native";

import colors from "../styles/colors";

import { SectionHeader } from "../components/SectionHeader";
import { InformationCard } from "../components/InformationCard";
import { PersonalIconsFooter } from "../components/PersonalIconsFooter";

export function Trainings(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <SectionHeader 
                    title="Treinos"
                />
                <FlatList
                    data={[1,2,3,4,5]}
                    renderItem={( item ) => (
                        <InformationCard 
                            name="Segunda-feira" 
                            goal="Treino de perna"
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listStyle}
                    numColumns={1}
                />
            </View>
            <PersonalIconsFooter />
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
    listStyle: {
        marginRight: 20,
        marginTop: 20,
    },
});