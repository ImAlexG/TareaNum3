import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Logo from "../components/Logo"; 

const Inicio = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.background}></View> 
            <Logo /> 
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => { navigation.navigate('SignIn') }}
                >
                    <Text style={styles.buttonText}>→</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff', 
    },
    buttonContainer: {
        marginTop: 20, 
        width: '100%',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: "#020202", 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "#ffffff", 
        fontSize: 30,
        alignItems: 'center',
        textAlign: "center",
    },
});

export default Inicio;
