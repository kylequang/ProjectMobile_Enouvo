import { StyleSheet, Text, View, Modal } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const ModalMarketing = ({ title, func, visible, content }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modalView}>
        <View style={styles.modalHeader}>
          <View style={styles.modalH}>
            <Text style={styles.modalTitle}>{title}</Text>
          </View>
          <Ionicons
            name="md-close-outline"
            size={24}
            color={"#2D1F21"}
            onPress={func}
          />
        </View>
        <View style={styles.modalDetail} />
        <Text style={styles.modalText}>{content}</Text>
      </View>
    </Modal>
  );
};

export default ModalMarketing;

const styles = StyleSheet.create({
  modalDetail: {
    height: 1,
    width: "auto",

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F1F5",
    paddingHorizontal: 16,
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    backgroundColor: "#ffff",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 19.75,
    alignItems: "center",
  },
  modalH: {
    paddingLeft: "30%",
  },
  modalTitle: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 24,
    paddingVertical: 20,
  },
  modalText: {
    padding: 16,
    paddingBottom: 40,
  },
});
