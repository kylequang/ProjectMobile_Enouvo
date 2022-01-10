import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabViewCentres from './Tab/TabCentres';
const CentreDetail = ({ route, navigation }) => {
  return (
    <View>
      <TabViewCentres />
    </View>
  );
};

export default CentreDetail;

const styles = StyleSheet.create({});
