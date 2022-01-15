import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import MoreStackNavigator from './MoreStackNavigator';
import CentresStackNavigator from './CentresStackNavigator';

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
          } else if (route.name === 'MoreStack') {
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
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Centres" options={{ headerShown: false }}>
        {() => <CentresStackNavigator />}
      </Tab.Screen>
      <Tab.Screen
        name="MoreStack"
        component={MoreStackNavigator}
        options={{
          title: 'More',
        }}
      />
    </Tab.Navigator>
  );
}
