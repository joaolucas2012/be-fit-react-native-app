import React from "react";

import {
    View,
    StyleSheet
} from "react-native";

import home from "../assets/home.png";
import chat from "../assets/chat.png";
import { IconButton } from "./IconButton";

import colors from "../styles/colors";

export function PersonalIconsFooter(){
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
        </View>
    );
;}

const styles = StyleSheet.create({
    iconsFooter: {
        backgroundColor: colors.white,
        paddingHorizontal: 80,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        position: "relative",
        height: 80,
    },
});