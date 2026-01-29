import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ApiCall from '../ApiCall'
import ApiPost from '../ApiPost'
import CounterScreen from '../CounterScreen'
import DocumentPreview from '../DocumentPreview'
import DocumentPreviewScreen from '../DocumentPreviewScreen'
import ImagePicker from '../ImagePicker'
import MyFlatlist from '../MyFlatlist'
import MyScrollComponent from '../MyScrollComponent'
import MySectionList from '../MySectionList'
import UserFlatlist from '../UserFlatlist'
import UserProfileCard from '../UserProfileCard'
import TabNavigation from './TabNavigation'

const HomeTabStack = () => {

const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="TabNavigation" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="MyScrollComponent" component={MyScrollComponent} />
          <Stack.Screen name="MySectionList" component={MySectionList} />
          <Stack.Screen name="MyFlatlist" component={MyFlatlist} />
          <Stack.Screen name="UserFlatlist" component={UserFlatlist} />
          <Stack.Screen name="UserProfileCard" component={UserProfileCard} />
          <Stack.Screen name="ApiCall" component={ApiCall} />
          <Stack.Screen name="ApiPost" component={ApiPost} />
          <Stack.Screen name="ImagePicker" component={ImagePicker} />
          <Stack.Screen name="DocumentPreview" component={DocumentPreview} />
          <Stack.Screen name="DocumentPreviewScreen" component={DocumentPreviewScreen} />
          <Stack.Screen name="CounterScreen" component={CounterScreen} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeTabStack