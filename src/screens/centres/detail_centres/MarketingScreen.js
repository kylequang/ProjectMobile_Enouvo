import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CardMarketing from "../../../components/CardMarketing";
import ModalMarketing from "../../../components/ModalMarketing";

export default function MarketingScreen(props) {
  const [featModalVisible, setModalVisibleFeat] = useState(false);
  const [specModalVisible, setModalVisibleSpec] = useState(false);

  const check = (key) => {
    if (key === 0) {
      setModalVisibleFeat(true);
    }
    if (key === 1) {
      setModalVisibleSpec(true);
    }
  };

  return (
    <View style={styles.container}>
      {props.marketing.map((item, key) => {
        return (
          <CardMarketing
            key={key}
            title={item.name}
            func={() => check(key)}
            money={item.money}
            isEnabledSpec={item.status}
          ></CardMarketing>
        );
      })}
      {props.marketing.map((item, key) => {
        if (key === 0) {
          return (
            <ModalMarketing
              key={key}
              title={item.name}
              func={() => setModalVisibleFeat(!featModalVisible)}
              visible={featModalVisible}
              content={item.details}
            ></ModalMarketing>
          );
        }
        if (key === 1) {
          return (
            <ModalMarketing
              key={key}
              title={item.name}
              func={() => setModalVisibleSpec(!specModalVisible)}
              visible={specModalVisible}
              content={item.details}
            ></ModalMarketing>
          );
        }
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
