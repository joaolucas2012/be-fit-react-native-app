import React from 'react';

import{
    TouchableOpacity,
    Text,
    Image,
    StyleSheet
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import youtubeIcon from "../assets/youtubeIcon.png";

interface videoProps{
    title: string;
};

export function VideoCard(
    {title} : videoProps
){
    return(
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.7}
        >
            <Text style={styles.text}>
                {title}
            </Text>
            <Image
                style={styles.icon}
                source={youtubeIcon}
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        marginBottom: 15,
        borderRadius: 20,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "left",
        flexDirection: "row",
        height: 70,
    },
    text: {
        fontFamily: fonts.title,
        fontSize: 14,
        color: colors.black,
        width: "72%",
    },
    icon: {
        marginRight: 5,
    },
});