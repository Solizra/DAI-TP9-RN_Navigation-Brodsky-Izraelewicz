import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ConfiguracionScreen() {
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>Open up ConfiguracionScreen.js to start working on your ConfiguracionScreen!</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pantalla')}>
        <Text style={styles.buttonText}>Ir a Pantalla</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  