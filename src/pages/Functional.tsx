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

import { IconsFooter } from "../components/IconsFooter";
import { VideoCard } from "../components/VideoCard";
import { SectionHeader } from "../components/SectionHeader";

export function Functional(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <SectionHeader 
                    title="Funcional"
                />
                <FlatList
                    data={[1,2,3]}
                    renderItem={( item ) => (
                        <VideoCard title="Agachamento com pesos" />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listStyle}
                    numColumns={1}
                />
            </View>
            <View>
                <IconsFooter />
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
});