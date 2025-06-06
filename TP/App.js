import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './Screens/HomeScreen';
import DetallesScreen from './Screens/DetallesScreen';
import LoginScreen from './Screens/LoginScreen';
import ConfiguracionScreen from './Screens/ConfiguracionScreen';
import NotificacionesScreen from './Screens/NotificacionesScreen';
import CuentaScreen from './Screens/CuentaScreen';
import PantallaScreen from './Screens/PantallaScreen';
import CorreosScreen from './Screens/CorreosScreen';

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen }/>
      <HomeStack.Screen name="Detalles" component={DetallesScreen} />
    </HomeStack.Navigator>
  );
}

const LoginStack = createNativeStackNavigator();
function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={LoginScreen}/>
      <LoginStack.Screen name="Cuenta" component={CuentaScreen}/>
    </LoginStack.Navigator>
  );
}

const ConfiguracionStack = createNativeStackNavigator();
function ConfiguracionStackScreen() {
  return (
    <ConfiguracionStack.Navigator>
      <ConfiguracionStack.Screen name="Configuracion Home" component={ConfiguracionScreen}/>
      <ConfiguracionStack.Screen name="Pantalla" component={PantallaScreen}/>
    </ConfiguracionStack.Navigator>
  );
}

const NotificacionesStack = createNativeStackNavigator();
function NotificacionesStackScreen() {
  return (
    <NotificacionesStack.Navigator>
      <NotificacionesStack.Screen name="Notificaciones Home" component={NotificacionesScreen } />
      <NotificacionesStack.Screen name="Correos" component={CorreosScreen} />
    </NotificacionesStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}} >
        <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{title: 'Inicio', tabBarIcon: ({ color }) => (<Ionicons name="home" size={24} color={color} />)}} />
        <Tab.Screen name="ProfileTab" component={LoginStackScreen} options={{title: 'Login', tabBarIcon: ({ color }) => (<Ionicons name="person" size={24} color={color} />)}} />
        <Tab.Screen name="NotificacionesTab" component={NotificacionesStackScreen} options={{title: 'Notificaciones', tabBarIcon: ({ color }) => (<Ionicons name="notifications" size={24} color={color} />)}} /> 
        <Tab.Screen name="ConfiguracionTab" component={ConfiguracionStackScreen} options={{title: 'Configuracion', tabBarIcon: ({ color }) => (<Ionicons name="settings" size={24} color={color} />)}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

