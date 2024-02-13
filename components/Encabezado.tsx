import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Encabezado = () => {
    return (
        <View style={styles.encabezado}> 
            <Image style={styles.zara} source={require("./Zara.png")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    encabezado: {
        height: 100, 
        backgroundColor: "#FFFFFF", 
        flexDirection: "row", 
        alignItems: "center", 
        paddingHorizontal: 100, 
    },
    zara: {
        flex: 1, 
        height: 90, 
        resizeMode: "contain", 
        width: 600,
    },
});

export default Encabezado;
