import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const CardRate = ({ img, title, subTitle }) => {
  return (
    <View style={styles.cardView}>
      <View style={styles.content}>
        <View style={styles.imgItem}>
          <Image source={img} />
        </View>
        <View style={styles.column}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        <View style={styles.icon}>
          <Ionicons name="chevron-down" size={20} color={"#857E7F"} />
        </View>
      </View>
    </View>
  );
};

export default CardRate;

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 16,
    paddingLeft: 12,
    paddingVertical: 12,
    flexWrap: "wrap",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },
  subTitle: {
    fontSize: 12,
    paddingTop: 4,
    fontWeight: "300",
    lineHeight: 17,
    color: "#5C595A",
  },
  column: {
    flexDirection: "column",
    paddingLeft: 12,
  },
  icon: {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: "auto",
    paddingRight: 14.5,
  },
  imgItem: {
    width: 40,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
