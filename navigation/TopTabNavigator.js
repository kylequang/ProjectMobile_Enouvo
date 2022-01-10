import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Summary from '../Screens/Tab/Summary';
import Centre_Info from '../Screens/Tab/Centre_Info';
import Hours from '../Screens/Tab/Hours';
import Service from '../Screens/Tab/Service';
import Feature from '../Screens/Tab/Feature';
import Marketing from '../Screens/Tab/Marketing';
import Ratings_Reviews from '../Screens/Tab/Ratings_Reviews';
import MyTabBar from '../components/MyTabBar';

const TabCentre = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <TabCentre.Navigator
      initialRouteName="Summary"
      // tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarScrollEnabled: true,
        // tabBarStyle: { backgroundColor: 'gray' },
      }}
    >
      <TabCentre.Screen name="Summary" component={Summary} />
      <TabCentre.Screen name="Centre Information" component={Centre_Info} />
      <TabCentre.Screen name="Hours" component={Hours} />
      <TabCentre.Screen name="Services" component={Service} />
      <TabCentre.Screen name="Features" component={Feature} />
      <TabCentre.Screen name="Marketing" component={Marketing} />
      <TabCentre.Screen name="Rating Review" component={Ratings_Reviews} />
    </TabCentre.Navigator>
  );
};

export default TopTabNavigator;

const styles = StyleSheet.create({});
