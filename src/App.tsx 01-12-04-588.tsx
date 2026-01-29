import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import MyScrollComponent from './Screens/MyScrollComponent';
import MySectionList from './Screens/MySectionList';
import MyFlatlist from './Screens/MyFlatlist';
import UserFlatlist from './Screens/UserFlatlist';
import UserProfileCard from './Screens/UserProfileCard';
import ApiCall from './ApiCall';
import ApiPost from './Screens/ApiPost';
import ImagePicker from './Screens/ImagePicker';
import DocumentPreview from './Screens/DocumentPreview';
import DocumentPreviewScreen from './Screens/DocumentPreviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MyScrollComponent" component={MyScrollComponent} />
        <Stack.Screen name="MySectionList" component={MySectionList} />
        <Stack.Screen name="MyFlatlist" component={MyFlatlist} />
        <Stack.Screen name="UserFlatlist" component={UserFlatlist} />
        <Stack.Screen name="UserProfileCard" component={UserProfileCard} />
        <Stack.Screen name="ApiCall" component={ApiCall} />
        <Stack.Screen name="ApiPost" component={ApiPost} />
        <Stack.Screen name="ImagePicker" component={ImagePicker} />
        <Stack.Screen name="DocumentPreview" component={DocumentPreview} />
        <Stack.Screen
          name="DocumentPreviewScreen"
          component={DocumentPreviewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
