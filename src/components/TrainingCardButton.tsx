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
    ...rest
}:TrainingProps){
    return(
        <TouchableOpacity 
            style={styles.container}
            {...rest}
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
                <Image 
                    source={icon}
                    style={styles.icon}
                    resizeMode="contain"
                />
                <Text style={styles.durationText}>
                    {duration}
                </Text>
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
        width: 120,
        height: 114,
        borderRadius: 20,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
    },
    image: {
        width: 30,
        height: 30,
    },
    TrainingName: {
        fontSize: 14,
        fontFamily: fonts.title,
        color: colors.heading,
        lineHeight: 15.4,
    },
    icon: {
        width: 10,
        height: 10,
    },
    durationText: {
        fontFamily: fonts.body,
        fontSize: 10,
        lineHeight: 11,
        color: colors.heading,
    },
});