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
      <Text style={estilos.titulo}>
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
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  button: {
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

const estilosOscuro = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  button: {
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
