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
import { Button } from "../components/Button";
import { PersonalIconsFooter } from "../components/PersonalIconsFooter";

export function Classmates(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <SectionHeader 
                    title="Alunos"
                />
                <FlatList
                    data={[1,2,3]}
                    renderItem={( item ) => (
                        <InformationCard 
                            name="Pedro Silva" 
                            goal="Objetivo: resistência"
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listStyle}
                    numColumns={1}
                />
            </View>
            <View>
                <View style={styles.buttonView}>
                    <Button 
                        title="Adicionar aluno"
                    />
                </View>
                <PersonalIconsFooter />
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
    listStyle: {
        marginRight: 20,
        marginTop: 20,
    },
    buttonView: {
        marginBottom: 40,
        alignItems: "center",
    },
});