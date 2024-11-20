import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './src/screens/CameraScreen';
import ConfigScreen from './src/screens/ConfigScreen';
import LandingScreen from './src/screens/LandingScreen';
import VoiceScreen from './src/screens/VoiceScreen';
import AuthScreen from './src/screens/AuthScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LandingScreen' screenOptions={
        {
          headerShown: false,
          gestureEnabled: true,
        }
      }>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          animation: 'slide_from_bottom'
        }} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} options={{
          animation: 'slide_from_right'
        }} />
        <Stack.Screen name="ConfigScreen" component={ConfigScreen} options={{
          animation: 'slide_from_left'
        }} />
        <Stack.Screen name="VoiceScreen" component={VoiceScreen} options={{
          animation: 'slide_from_bottom'
        }} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} options={{
          animation: 'slide_from_bottom'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
