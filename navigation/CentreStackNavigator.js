import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Centres from '../Screens/Centres';
import CentreDetail from '../Screens/CentreDetail';

const CentreStack = createNativeStackNavigator();

const CentreStackNavigator = () => {
  return (
    <CentreStack.Navigator
      mode="modal"
      screenOptions={{ headerTitleAlign: 'center' }}
    >
      <CentreStack.Screen
        name="Centre"
        component={Centres}
        options={{ headerShown: false }}
      />
      <CentreStack.Screen name="Centre Details" component={CentreDetail} />
    </CentreStack.Navigator>
  );
};

export default CentreStackNavigator;
