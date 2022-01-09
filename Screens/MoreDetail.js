import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
const MoreDetail = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <Text>My profile</Text>
            <Text>Language</Text>
            <Text>Price display</Text>
            <Text>Notifications</Text>
          </View>
          <View style={styles.rightHeader}>
            <Ionicons name="person-circle" size={45} color={"#ACB2B8"} />
            <Text style={styles.rightText}>English</Text>
            <Text style={styles.rightText}>AUD</Text>
            <Text>Notifications</Text>
          </View>
        </View>
        <View style={styles.body}></View>
        <View style={styles.footer}></View>
      </View>
    </SafeAreaView>
  );
};
export default MoreDetail;
