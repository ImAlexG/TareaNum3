import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const AppNav = ({ route }) => {
  const { nombre, email, telefono } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image source={require('../components/Usuario.jpeg')} style={styles.userImage} />
        <View style={styles.userDataBubble}>
          <Text style={styles.userInfoText}>Nombre: {nombre}</Text>
          <Text style={styles.userInfoText}>Correo electrónico: {email}</Text>
          <Text style={styles.userInfoText}>Teléfono: {telefono}</Text>
        </View>
      </View>
      <View style={styles.giftcardBubble}>
        <Image source={require('../components/TarjetaRegalo.png')} style={styles.giftcardImage} />
        <Text style={styles.giftcardMessage}>¡Reclama tu giftcard!</Text>
        <TextInput
          style={styles.giftcardInput}
          placeholder="Introduce el código de tu giftcard"
        />
      </View>
      <View style={styles.catalogBubble}>
        <Text style={styles.catalogText}>Previamente Comprado</Text>
        <View style={styles.bubbleGrid}>
          <TouchableOpacity style={styles.bigBubble}>
            <Image source={require('../components/Camisa1.jpg')} style={styles.shirtImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bigBubble}>
            <Image source={require('../components/Camisa2.jpg')} style={styles.shirtImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bigBubble}>
            <Image source={require('../components/Camisa3.jpg')} style={styles.shirtImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bigBubble}>
            <Image source={require('../components/Camisa4.jpg')} style={styles.shirtImage} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userDataBubble: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
  },
  giftcardBubble: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  giftcardImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  giftcardMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  giftcardInput: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    padding: 5,
    width: '80%',
    textAlign: 'center',
  },
  catalogBubble: {
    alignItems: 'center',
    
   
  },
  catalogText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bubbleGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  bigBubble: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    width: '48%', 
  },
  userInfoText: {
    color: '#000000',
    marginBottom: 3,
    fontSize: 14, 
  },
  shirtImage: {
    width: '100%',
    height: 100,
  },
});

export default AppNav;
