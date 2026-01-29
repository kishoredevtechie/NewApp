import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../LoginScreen';
import SignupForm from '../SignupForm';
import SignupScreen from '../SignupScreen';

const LoginStackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="SignupForm" component={SignupForm} />
      </Stack.Navigator>
  );
};

export default LoginStackNavigation;
