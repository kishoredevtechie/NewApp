import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeTabStack from './HomeTabStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <View><Text>Tab Navigation screen</Text></View>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
