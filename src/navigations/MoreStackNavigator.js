import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoreScreen from '../screens/more/MoreScreen';
import MoreDetailScreen from '../screens/more/MoreDetailScreen';
const Stack = createNativeStackNavigator();

function MoreStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="More"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 16,
        },
      }}
    >
      <Stack.Screen name="More" component={MoreScreen} />
      <Stack.Screen
        options={{ title: 'More' }}
        name="MoreDetail"
        component={MoreDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default MoreStackNavigator;
