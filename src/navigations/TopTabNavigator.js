import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SummaryScreen from "../screens/centres/detail_centres/SummaryScreen";
import Centre_InfoScreen from "../screens/centres/detail_centres/Centre_InfoScreen";
import HoursScreen from "../screens/centres/detail_centres/HoursScreen";
import ServiceScreen from "../screens/centres/detail_centres/ServiceScreen";
import FeatureScreen from "../screens/centres/detail_centres/FeatureScreen";
import MarketingScreen from "../screens/centres/detail_centres/MarketingScreen";
import Ratings_ReviewsScreen from "../screens/centres/detail_centres/Ratings_ReviewsScreen";

const TabCentre = createMaterialTopTabNavigator();

const TopTabNavigator = ({ route, navigation }) => {
  const [center, setCenter] = useState([]);

  const [img, setImg] = useState();

  const [geInfo, setInfo] = useState([]);
  const [contact, setContact] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [feature, setFeature] = useState([]);
  const [service, setService] = useState([]);
  const [marketing, setMarketing] = useState([]);
  const [nqsrating, setNQSRating] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const [add, setAdd] = useState([]);

  useEffect(() => {
    const { center } = route.params;

    setCenter(center);
    setImg(center.image);

    setInfo(center.General_Infor);
    setContact(center.Contact_Infor);
    setEnquiries(center.Enquiries_Sum);
    setFeature(center.Features);
    setService(center.Services);
    setMarketing(center.Marketting);
    setNQSRating(center.NQSRating);
    setUserReviews(center.UserReviews);
    setAdd(center.Additional_Details);
  }, []);

  return (
    <TabCentre.Navigator
      initialRouteName="Summary"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#E5E5E5" },
      }}
    >
      <TabCentre.Screen
        name="Summary"
        children={() => (
          <SummaryScreen
            center={center}
            avatar={img}
            info={geInfo}
            contact={contact}
            enquiries={enquiries}
          />
        )}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 96,
                marginLeft: -40,
                paddingHorizontal: 20,
                paddingVertical: 5,
                backgroundColor: focused ? "#fff" : "",
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? "#e91e63" : "#857E7F",
                  fontSize: 11,
                  fontWeight: "bold",
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
        children={() => <Centre_InfoScreen add={add} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 160,
                marginLeft: -68,
                paddingHorizontal: 20,
                paddingVertical: 5,
                backgroundColor: focused ? "#fff" : "",
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? "#e91e63" : "#857E7F",
                  fontSize: 11,
                  fontWeight: "bold",
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
        component={HoursScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 78,
                marginLeft: -27,
                paddingHorizontal: 20,
                paddingVertical: 5,
                backgroundColor: focused ? "#fff" : "",
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? "#e91e63" : "#857E7F",
                  fontSize: 11,
                  fontWeight: "bold",
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
        children={() => <ServiceScreen service={service} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 92,
                marginLeft: -35,
                paddingHorizontal: 20,
                paddingVertical: 5,
                backgroundColor: focused ? "#fff" : "",
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? "#e91e63" : "#857E7F",
                  fontSize: 11,
                  fontWeight: "bold",
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
        children={() => <FeatureScreen feature={feature} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 94,
                marginLeft: -37,
                paddingHorizontal: 20,
                paddingVertical: 5,
                backgroundColor: focused ? "#fff" : "",
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? "#e91e63" : "#857E7F",
                  fontSize: 11,
                  fontWeight: "bold",
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
        children={() => (
          <MarketingScreen marketing={marketing}  />
        )}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 105,
                marginLeft: -42,
                paddingHorizontal: 20,
                paddingVertical: 5,
                backgroundColor: focused ? "#fff" : "",
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? "#e91e63" : "#857E7F",
                  fontSize: 11,
                  fontWeight: "bold",
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
        children={() => <Ratings_ReviewsScreen nqsrating={nqsrating} userReviews={userReviews}/>}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 125,
                marginLeft: -47,
                paddingHorizontal: 20,
                paddingVertical: 5,
                backgroundColor: focused ? "#fff" : "",
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? "#e91e63" : "#857E7F",
                  fontSize: 11,
                  fontWeight: "bold",
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
