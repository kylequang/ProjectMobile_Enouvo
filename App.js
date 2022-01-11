import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './navigation/BottomTab';
import Centres from './Screens/Centres';
import More from './Screens/More';
import LoginScreen from './Screens/Auth/LoginScreen';
import Splash from './Screens/Auth/Splash';
import ForgotPass from './Screens/Auth/ForgotPass';

const Stack = createNativeStackNavigator();
export default function App() {
  const [timePassed, setTimePassed] = useState(false);
  useEffect(() => {
    setTimeout(() => setTimePassed({ timePassed: true }), 10000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {timePassed ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPass}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={BottomTab}
          name="BottomTab"
          options={{ headerShown: false }}
        />
        <Stack.Screen component={Centres} name="Centres" />
        <Stack.Screen component={More} name="More" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
