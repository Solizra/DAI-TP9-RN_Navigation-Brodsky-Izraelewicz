import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function NotificacionesScreen() {
  const [mensaje, setMensaje] = useState('');
  const navigation = useNavigation();

  const Enviar = () => {
    if (mensaje === '' ) {
      Alert.alert('Error', 'Por favor, ingresa un mensaje!!');
      return;
    }
    navigation.navigate('Correos', { mensaje });
  };

  const fondo = {
    uri: 'https://i.pinimg.com/736x/3a/be/ca/3abeca0e0ae320323a80b7065e27c217.jpg',
  };

    return (
      <ImageBackground source={fondo} style={styles.fondo} resizeMode="cover">
      <View style={styles.container}>
        <Text style= {styles.titulo}>Notificaciones</Text>
        <TextInput
          style={styles.input}
          placeholder="Mensaje"
          placeholderTextColor="#ccc"
          value={mensaje}
          onChangeText={setMensaje}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={Enviar} ><Text style={styles.buttonText}>Tus Correos</Text></TouchableOpacity>
        <StatusBar style="auto" />
      </View>
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    fondo: {
      flex: 1,
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      paddingHorizontal: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)', 
    },
    titulo: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 25,
    },
    input: {
      width: '100%',
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 12,
      paddingHorizontal: 15,
      fontSize: 16,
      marginBottom: 20,
    },
    buttonContainer: {
      backgroundColor: '#00b894',
      paddingVertical: 14,
      borderRadius: 12,
      width: '100%',
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    

  });
  