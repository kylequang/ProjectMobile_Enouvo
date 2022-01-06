import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../Screens/Dashboard';
import Centres from '../Screens/Centres';
import More from '../Screens/More';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator initialRouteName='Dashboard' screenOptions={{ headerShown: false }}>
            <Tab.Screen component={Dashboard} name="Dashboard"
                options={{
                    tabBarIcon: () => (
                        <Ionicons
                            name="home"
                            size={23}
                            color={'red'}
                        />
                    ),
                }}
            />
            <Tab.Screen component={Centres} name="Centres"
                options={{
                    tabBarIcon: () => (
                        <Ionicons
                            name=""
                            size={23}
                            color={'red'}
                        />
                    ),
                }}
            />
            <Tab.Screen component={More} name="More"
                options={{
                    tabBarIcon: () => (
                        <Ionicons
                            name=""
                            size={23}
                            color={'red'}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
