import React from "react";

import{
    Image,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface buttonProps extends TouchableOpacityProps{
    icon: any;
    title: string;
    isActive?: boolean;
};

export function IconButton(
    {
        icon,
        title,
        isActive = false,
        ...rest
    } :buttonProps)
{
    return(
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <Image
                style={styles.icon}
                source={icon}
                resizeMode="contain"
            />
            <Text style={[
                styles.title,
                isActive && styles.activeTitle
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: 60,
        width: 80,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 17,
        height: 17,
    },
    title: {
        fontFamily: fonts.complement,
        fontSize: 12,
        color: colors.black,
        lineHeight: 20,
    },
    activeTitle: {
        color: colors.primary,
    },
});