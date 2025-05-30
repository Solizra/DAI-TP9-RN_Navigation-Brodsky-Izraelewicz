import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function PantallaScreen() {
  const [modoOscuro, setModoOscuro] = useState(false);

  const Tema = () => {
    setModoOscuro(!modoOscuro);
  };

  const estilos = modoOscuro ? estilosOscuro : estilosClaro;

  return (
    <View style={estilos.container}>
      <Text style={estilos.text}>
        ¡Estás en {modoOscuro ? 'modo oscuro' : 'modo claro'}!
      </Text>

      <TouchableOpacity style={estilos.button} onPress={Tema}>
        <Text style={estilos.buttonText}>
          Cambiar a {modoOscuro ? 'claro' : 'oscuro'}
        </Text>
      </TouchableOpacity>

      <StatusBar style={modoOscuro ? 'light' : 'dark'} />
    </View>
  );
}

const estilosClaro = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

const estilosOscuro = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f1c40f',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
