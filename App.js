import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/auth/LoginScreen';
import SplashScreen from './src/screens/auth/SplashScreen';
import ForgotPassScreen from './src/screens/auth/ForgotPassScreen';
import BottomTab from './src/navigations/BottomTab';
import MoreStackNavigator from './src/navigations/MoreStackNavigator';

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
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={BottomTab}
          name="BottomTab"
          options={{ headerShown: false }}
        />
        <Stack.Screen component={MoreStackNavigator} name="MoreStack" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
