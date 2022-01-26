import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabNavigator from './TopTabNavigator';
import CentresScreen from '../screens/centres/CentresScreen';
import CreateCentreScreen from '../screens/centres/CreateCentreScreen';
const CentreStack = createNativeStackNavigator();

const CentresStackNavigator = () => {
  return (
    <CentreStack.Navigator
      initialRouteName="Centre"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 18,
        },
      }}
    >
      <CentreStack.Screen
        name="Centre"
        component={CentresScreen}
        options={{ headerShown: false }}
      />
      <CentreStack.Screen name="Centre Details" component={TopTabNavigator} />
      <CentreStack.Screen name="Add Centre" component={CreateCentreScreen} />
    </CentreStack.Navigator>
  );
};

export default CentresStackNavigator;

const styles = StyleSheet.create({});
