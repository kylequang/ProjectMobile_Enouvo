import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Summary from '../Screens/Tab/Summary';
import Centre_Info from '../Screens/Tab/Centre_Info';
import Hours from '../Screens/Tab/Hours';
import Service from '../Screens/Tab/Service';
import Feature from '../Screens/Tab/Feature';
import Marketing from '../Screens/Tab/Marketing';
import Ratings_Reviews from '../Screens/Tab/Ratings_Reviews';

const TabCentre = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <TabCentre.Navigator
      initialRouteName="Summary"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#E5E5E5' },
      }}
    >
      <TabCentre.Screen
        name="Summary"
        component={Summary}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 96,
                marginLeft: -40,
                paddingHorizontal: 20,
                paddingVertical: 5,
                backgroundColor: focused ? '#fff' : '',
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? '#e91e63' : '#857E7F',
                  fontSize: 11,
                  fontWeight: 'bold',
                }}
              >
                SUMMARY
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <TabCentre.Screen
        name="Centre Information"
        component={Centre_Info}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 160,
                marginLeft: -68,
                paddingHorizontal: 20,
                paddingVertical: 5,
                backgroundColor: focused ? '#fff' : '',
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? '#e91e63' : '#857E7F',
                  fontSize: 11,
                  fontWeight: 'bold',
                }}
              >
                CENTRE INFORMATION
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <TabCentre.Screen
        name="Hours"
        component={Hours}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 78,
                marginLeft: -27,
                paddingHorizontal: 20,
                paddingVertical: 5,
                backgroundColor: focused ? '#fff' : '',
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? '#e91e63' : '#857E7F',
                  fontSize: 11,
                  fontWeight: 'bold',
                }}
              >
                HOURS
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <TabCentre.Screen
        name="Services"
        component={Service}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 92,
                marginLeft: -35,
                paddingHorizontal: 20,
                paddingVertical: 5,
                backgroundColor: focused ? '#fff' : '',
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? '#e91e63' : '#857E7F',
                  fontSize: 11,
                  fontWeight: 'bold',
                }}
              >
                SERVICES
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <TabCentre.Screen
        name="Features"
        component={Feature}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 94,
                marginLeft: -37,
                paddingHorizontal: 20,
                paddingVertical: 5,
                backgroundColor: focused ? '#fff' : '',
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? '#e91e63' : '#857E7F',
                  fontSize: 11,
                  fontWeight: 'bold',
                }}
              >
                FEATURES
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <TabCentre.Screen
        name="Marketing"
        component={Marketing}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 105,
                marginLeft: -42,
                paddingHorizontal: 20,
                paddingVertical: 5,
                backgroundColor: focused ? '#fff' : '',
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? '#e91e63' : '#857E7F',
                  fontSize: 11,
                  fontWeight: 'bold',
                }}
              >
                MARKETING
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <TabCentre.Screen
        name="Rating Review"
        component={Ratings_Reviews}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 125,
                marginLeft: -47,
                paddingHorizontal: 20,
                paddingVertical: 5,
                backgroundColor: focused ? '#fff' : '',
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? '#e91e63' : '#857E7F',
                  fontSize: 11,
                  fontWeight: 'bold',
                }}
              >
                RATING REVIEW
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
    </TabCentre.Navigator>
  );
};

export default TopTabNavigator;

const styles = StyleSheet.create({});
