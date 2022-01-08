import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function More() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.Text}>More Page content</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 25,
  },
});
