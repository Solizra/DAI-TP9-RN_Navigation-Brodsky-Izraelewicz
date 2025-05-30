import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import homeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import ConfiguracionScreen from './Screens/ConfiguracionScreen';
import NotificacionesScreen from './Screens/NotificacionesScreen';

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}/>
      <HomeStack.Screen name="Details" component={DetailsScreen}/>
    </HomeStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Home" component={HomeScreen}/>
      <ProfileStack.Screen name="Details" component={DetailsScreen}/>
    </ProfileStack.Navigator>
  );
}

const ConfiguracionStack = createNativeStackNavigator();
function ConfiguracionStackScreen() {
  return (
    <ConfiguracionStack.Navigator>
      <ConfiguracionStack.Screen name="Home" component={HomeScreen}/>
      <ConfiguracionStack.Screen name="Details" component={DetailsScreen}/>
    </ConfiguracionStack.Navigator>
  );
}

const NotificacionesStack = createNativeStackNavigator();
function NotificacionesStackScreen() {
  return (
    <NotificacionesStack.Navigator>
      <NotificacionesStack.Screen name="Home" component={HomeScreen}/>
      <NotificacionesStack.Screen name="Details" component={DetailsScreen}/>
    </NotificacionesStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{title: 'Inicio'}} />
        <Tab.Screen name="ProfileTab" component={ProfileStackScreen} options={{title: 'Profile'} {tabBarIcon: ({ color }) => (<Ionicons name="person" size={24} color={color} />)}} />
        <Tab.Screen name="ConfiguracionTab" component={ConfiguracionStackScreen} options={{title: 'Configuracion'}} />
        <Tab.Screen name="NotificacionesTab" component={NotificacionesStackScreen} options={{title: 'Notificaciones'}} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}

