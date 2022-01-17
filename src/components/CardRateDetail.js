import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CardRateDetail = ({ img, title, onPress, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {{ img } ? <Image source={img} style={styles.icon} /> : null}
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.imgStyle} onPress={onPress}>
          <Ionicons name="chevron-up" size={20} color={"#857E7F"} />
        </TouchableOpacity>
      </View>
      <View style={styles.lineView}>
        <View style={styles.line}></View>
      </View>
      <View style={[styles.cardContent]}>{children}</View>
    </View>
  );
};

export default CardRateDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginTop: 16,
    marginHorizontal: 20,
    flexWrap: "wrap",
    paddingBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  cardContent: {
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    padding: 3,
    alignItems: "center",
  },
  imgStyle: {
    marginLeft: "auto",
  },
  title: {
    paddingLeft: 16,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
    color: "#2D1F21",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#F2F2F2",
  },
  lineView: {
    paddingTop: 18,
  },
});
