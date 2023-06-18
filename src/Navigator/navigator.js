import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screen/splashscreen';
import Home from '../Screen/homescreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const screenOptionStyle = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOption={screenOptionStyle}>
        <Stack.Screen name="splashNavigator" component={Splash} />
        <Stack.Screen name="homeNavigator" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
