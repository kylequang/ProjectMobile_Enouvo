import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
export default function Centres() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          iconName="storefront-outline"
          title="Goodstart Early Learning ABC"
          iconLeft="add-box"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  Text: {
    fontSize: 25,
  },
});
