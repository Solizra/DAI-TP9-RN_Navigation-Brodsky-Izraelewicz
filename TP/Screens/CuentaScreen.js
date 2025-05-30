// Screens/Cuenta.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const fondo = {
  uri: 'https://i.pinimg.com/736x/3a/be/ca/3abeca0e0ae320323a80b7065e27c217.jpg',
};

export default function CuentaScreen({ route }) {
  const { nombre, telefono } = route.params || {};

  return (
    <ImageBackground source={fondo} style={styles.fondo} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.titulo}>Datos de la Cuenta</Text>
        <Text style={styles.text}>Nombre: {nombre || 'No especificado'}</Text>
        <Text style={styles.text}>Teléfono: {telefono || 'No especificado'}</Text>
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
  text: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 15,
  },
});
