import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

export default function DetallesScreen() {
  const [nombre, setNombre] = useState('');

  const imagen = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73broZuXihBx0tLGP7_gE5FvPHdCoK8OMSg&s',
  };

  const fondo = {
    uri: 'https://i.pinimg.com/736x/3a/be/ca/3abeca0e0ae320323a80b7065e27c217.jpg',
  };

  return (
    <ImageBackground source={fondo} style={styles.fondo} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.titulo}>¡Bienvenido a Detalles!</Text>

        <Image source={imagen} style={styles.imagen} />

        <TextInput
          style={styles.input}
          placeholder="Escribí tu nombre"
          placeholderTextColor="#ccc"
          value={nombre}
          onChangeText={setNombre}/>
          
          <TouchableOpacity style={styles.buttonContainer} onPress={() => alert(`Hola, ${nombre || 'usuario'} 👋`)}>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  imagen: {
    width: 250,
    height: 180,
    marginBottom: 30,
    borderRadius: 15,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 20,
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: '#00b894',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});
