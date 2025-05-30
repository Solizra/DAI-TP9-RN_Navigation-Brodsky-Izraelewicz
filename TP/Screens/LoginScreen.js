import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  const fondo = {
    uri: 'https://i.pinimg.com/736x/3a/be/ca/3abeca0e0ae320323a80b7065e27c217.jpg',
  };

  const handleEnviar = () => {
    if (nombre === '' || telefono === '') {
      Alert.alert('Error', 'Por favor, ingresa nombre y teléfono');
      return;
    }
    // Navegamos enviando los datos a Cuenta
    navigation.navigate('Cuenta', { nombre, telefono });
  };

  return (
    <ImageBackground source={fondo} style={styles.fondo} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.titulo}>¡Inicia sesión!</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#ccc"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          placeholderTextColor="#ccc"
          keyboardType="phone-pad"
          value={telefono}
          onChangeText={setTelefono}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={handleEnviar}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <StatusBar style="light" />
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
    backgroundColor: 'rgba(0,0,0,0.5)', // fondo oscuro para buen contraste
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
