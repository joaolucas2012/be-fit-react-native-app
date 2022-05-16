import React from 'react';

import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface TrainingProps extends TouchableOpacityProps{
    title: string;
    photo: any;
    name: string;
    icon: any;
    duration: string;
};

export function TrainingCardButton({ 
    title,
    photo,
    name,
    icon,
    duration,
}:TrainingProps){
    return(
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.7}
        >
            <Text style={styles.title}>
                {title}
            </Text>
            <View style={styles.cardContent}>
                <Image 
                    source={photo} 
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.TrainingName}>
                    {name}
                </Text>
                <View style={styles.footer}>
                    <Image 
                        source={icon}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                    <Text style={styles.durationText}>
                        {duration}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: "left",
        fontFamily: fonts.body,
        fontSize: 14,
        color: colors.heading,
        marginBottom: 5,
    },
    cardContent: {
        flex: 1,
        width: 135,
        borderRadius: 20,
        backgroundColor: colors.secondary,
        textAlign: 'left',
        marginRight: 25,
        paddingLeft: 10,
        paddingVertical: 20,
    },
    image: {
        width: "30%",
        height: "30%",
        position: "relative",
    },
    TrainingName: {
        fontSize: 14,
        fontFamily: fonts.title,
        color: colors.heading,
        lineHeight: 15.4,
        width: "80%",
        marginVertical: 10,
    },
    footer: {
        flexDirection: "row",
        position: "relative",
        width: "80%",
    },
    icon: {
        width: 13,
        height: 13,
        marginRight: 5,
    },
    durationText: {
        fontFamily: fonts.body,
        fontSize: 10,
        lineHeight: 11,
        color: colors.heading,
    },
});