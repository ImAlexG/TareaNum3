import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text, TextInput } from "react-native";
import { SafeAreaView} from "react-native-safe-area-context";

const SignIn = ({ navigation }) => {

    const handleOnPress = () => {
        navigation.navigate('OTP')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Poner usuario"
                        placeholderTextColor="#757575"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        placeholderTextColor="#757575"
                        secureTextEntry={true}
                        
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleOnPress}
                >
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerContainer}>
                <Text>Olvidé mi contraseña</Text>
            </View>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', 
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50, 
        backgroundColor: '#FFFFFF', 
    },
    formContainer: {
        width: '100%',
        marginBottom: 20,
        backgroundColor: '#FFFFFF', 
        borderRadius: 20, 
        paddingVertical: 20, 
        paddingHorizontal: 15, 
    },
    inputContainer: {
        marginBottom: 10,
        borderColor: "#020202"
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    buttonContainer: {
        width: '100%',
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#020202",
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 18,
    },
    footerContainer: {
        width: '100%',
    },
});

export default SignIn;
