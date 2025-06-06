import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function ConfiguracionScreen() {
  const navigation = useNavigation();

  const imagen = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73broZuXihBx0tLGP7_gE5FvPHdCoK8OMSg&s',
  };

  const fondo = {
    uri: 'https://i.pinimg.com/736x/3a/be/ca/3abeca0e0ae320323a80b7065e27c217.jpg',
  };

  return (
    <ImageBackground source={fondo} style={styles.fondo} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.titulo}>¡Bienvenido a Configuración!</Text>
        <Image source={imagen} style={styles.imagen} />
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Pantalla')}>
          <Text style={styles.buttonText}>Ir a Pantalla</Text>
        </TouchableOpacity>
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
