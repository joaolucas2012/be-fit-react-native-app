import React from "react";

import {
    View,
    StyleSheet
} from "react-native";

import home from "../assets/home.png";
import chat from "../assets/chat.png";
import progress from "../assets/progress.png";
import { IconButton } from "../components/IconButton";

import colors from "../styles/colors";

export function IconsFooter(){
    return(
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
    );
;}

const styles = StyleSheet.create({
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