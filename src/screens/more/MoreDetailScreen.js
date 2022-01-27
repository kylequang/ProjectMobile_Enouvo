import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch, LogBox,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import MoreDataTitle from "../../database/mock-data/MoreData";
import { getAllMore } from "../../services/getData";
import { getAllDashboard } from '../../services/getData'
const MoreDetailScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [more, setMore] = useState([])
  useEffect(async () => {
    try {
      LogBox.ignoreLogs(['Setting a timer'])
      console.log('Thu')
      setMore(await getAllMore())
  } catch (e) {
      console.error(e);
  }
  }, [])

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.block}>
        <TouchableOpacity style={styles.BtnItem}>
          <Text style={styles.leftContent}>My profile</Text>
          <View style={styles.rightContent}>
            <Ionicons name="arrow-forward" size={19} color={"#0D0A03"} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BtnItem}>
          <Text style={styles.leftContent}>Language</Text>

          <View style={styles.rightContent}>
            <Text style={styles.boldText}>English</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BtnItem}>
          <Text style={styles.leftContent}>Price display</Text>

          <View style={styles.rightContent}>
            <Text style={styles.boldText}>AUD</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.BtnItem}>
          <Text style={styles.leftContent}>Notifications</Text>

          <Switch
            style={styles.toggleSwitch}
            trackColor={{ false: "#F7F8F9", true: "#DB147F" }}
            thumbColor={"#ffff"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <View style={styles.block}>
      {
          more.title.map((more, id) => {
            return (
              <TouchableOpacity key={id} style={styles.BtnItem}>
                <Text style={styles.leftContent}>{more}</Text>

                <View style={styles.rightContent}>
                  <Ionicons name="arrow-forward" size={19} color={"#2D1F21"} />
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.BtnItem}>
          <Text style={styles.leftContent}>Logout</Text>
          <View style={styles.rightContent}>
            <Ionicons name="log-out-outline" size={19} color={"#200E32"} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default MoreDetailScreen;
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#F7F8F9",
  },

  BtnItem: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    fontSize: 14,
    marginRight: 5,
  },

  block: {
    paddingVertical: 5,
    paddingHorizontal: 9,
    backgroundColor: "#ffff",
    flexDirection: "column",
    flexWrap: "wrap",
    marginBottom: 12,
  },

  footer: {
    paddingVertical: 5,
    paddingHorizontal: 9,
    backgroundColor: "#ffff",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  rightContent: {
    padding: 11,
  },
  leftContent: {
    color: "#2D1F21",
    padding: 11,
  },
  boldText: {
    color: "#2D1F21",
    fontWeight: "700",
  },
});
