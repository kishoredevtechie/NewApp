import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStackNavigation from './LoginStackNavigation';
import TabNavigation from './TabNavigation';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const LoginAuthNavigator = () => {
  const { isLoggedIn, username } = useSelector(state => state.loginAuth);
  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigation /> : <LoginStackNavigation />}
    </NavigationContainer>
  );
};

export default LoginAuthNavigator;
