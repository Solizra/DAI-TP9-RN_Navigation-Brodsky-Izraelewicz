
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const fondo = {
  uri: 'https://i.pinimg.com/736x/3a/be/ca/3abeca0e0ae320323a80b7065e27c217.jpg',
};

export default function CorreosScreen({ route }) {
  const { mensaje } = route.params || {};

  return (
    <ImageBackground source={fondo} style={styles.fondo} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.titulo}>Tus Correos</Text>
        <Text style={styles.text}>Mensaje: {mensaje || 'No existe'}</Text>
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
  text: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 15,
    backgroundColor: '#6FB98F',
    padding: 10,
    borderRadius: 5
  },
});
