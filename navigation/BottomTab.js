import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../Screens/Dashboard';
// import Centres from '../Screens/Centres';
import CentreStackNavigator from './CentreStackNavigator';
import More from '../Screens/More';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Centres') {
            iconName = focused ? 'storefront-outline' : 'storefront-outline';
          } else if (route.name === 'More') {
            iconName = focused ? 'dots-horizontal' : 'dots-horizontal';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={30} color={color} />
          );
        },
        tabBarActiveTintColor: '#DB147F',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
        tabBarLabelStyle: {
          fontSize: 15,
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Centres" options={{ headerShown: false }}>
        {() => <CentreStackNavigator />}
      </Tab.Screen>
      {/* <Tab.Screen name="Centres" component={Centres} /> */}
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}
