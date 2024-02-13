import React, { useState } from "react";
import { SafeAreaView, View, TextInput, Button, TouchableOpacity, Text, StyleSheet } from "react-native";

const OTP = ({ navigation }) => {
    const [otp, setOtp] = useState('');

    const handleOnPress = () => {
        navigation.navigate('InformacionUser')
     };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.background}></View>
            <Text style={styles.infoText}>
                Ingrese el código de 4 dígitos que fue enviado a su número ****-9410
            </Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputRow}>
                    <TextInput
                        style={styles.input}
                        placeholder="0"
                        placeholderTextColor="#757575"
                        keyboardType="numeric"
                        maxLength={1}
                        value={otp}
                        onChangeText={(text) => setOtp(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="0"
                        placeholderTextColor="#757575"
                        keyboardType="numeric"
                        maxLength={1}
                        value={otp}
                        onChangeText={(text) => setOtp(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="0"
                        placeholderTextColor="#757575"
                        keyboardType="numeric"
                        maxLength={1}
                        value={otp}
                        onChangeText={(text) => setOtp(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="0"
                        placeholderTextColor="#757575"
                        keyboardType="numeric"
                        maxLength={1}
                        value={otp}
                        onChangeText={(text) => setOtp(text)}
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleOnPress}
                >
                    <Text style={styles.buttonText}>Verificar</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.arrowContainer}
                onPress={() => navigation.goBack()}
            >
                <View style={styles.arrowBox}>
                    <Text style={styles.arrow}>←</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
    },
    infoText: {
        marginBottom: 90,
        textAlign: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 70,
        alignItems: 'center',
    },
    inputRow: {
        flexDirection: 'row',
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5,
        marginHorizontal: 5,
        textAlign: 'center',
        width: 40,
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
    arrowContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    arrowBox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 5,
    },
    arrow: {
        fontSize: 24,
    },
});

export default OTP;
