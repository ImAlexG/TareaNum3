import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('./Zara.png')} 
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100000, 
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    
});

export default Logo;
