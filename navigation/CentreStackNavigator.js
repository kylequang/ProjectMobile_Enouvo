import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Centres from '../Screens/Centres';
import TopTabNavigator from './TopTabNavigator';

const CentreStack = createNativeStackNavigator();

const CentreStackNavigator = () => {
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
        component={Centres}
        options={{ headerShown: false }}
      />
      <CentreStack.Screen name="Centre Details" component={TopTabNavigator} />
    </CentreStack.Navigator>
  );
};

export default CentreStackNavigator;
