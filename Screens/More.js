import React from 'react';
import { ScrollView, StyleSheet, Text} from 'react-native';
import TabViewCentres from './Tab/TabCentres';

export default function More() {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} >
      <TabViewCentres/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 25,
  },
});
