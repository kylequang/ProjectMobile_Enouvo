import { Switch, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const CardMarketing = ({ title, func, money, specSwitch, isEnabledSpec }) => {
  return (
    <View style={styles.block}>
      <View style={styles.leftContent}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity>
            <Ionicons
              name="information-circle-sharp"
              size={14}
              color={"#857E7F"}
              onPress={func}
            />
          </TouchableOpacity>
        </View>
        <Text>
          <Text style={styles.moneyLeft}>${money}</Text>
          <Text style={styles.moneyRight}>/per month</Text>
        </Text>
      </View>
      <Switch
        style={styles.toggleSwitch}
        trackColor={{ false: "#F7F8F9", true: "#DB147F" }}
        thumbColor={"#ffff"}
        ios_backgroundColor="#3e3e3e"
        value={isEnabledSpec}
      />
    </View>
  );
};

export default CardMarketing;

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffff",
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
  },
  leftContent: {
    color: "#2D1F21",
  },
  header: {
    flexDirection: "row",
  },
  title: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 24,
  },
  moneyLeft: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 32,
  },
  moneyRight: {
    fontWeight: "400",
  },
});
