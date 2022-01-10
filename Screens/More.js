import React from 'react';
import { ScrollView, StyleSheet, Text} from 'react-native';


export default function More() {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} >
       <Text>More Screen</Text>
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
