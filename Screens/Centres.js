import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
        <View>
          <ScrollView horizontal={true} style={{ padding: 20 }}>
            <View style={{ paddingVertical: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons
                  name="storefront-outline"
                  size={20}
                  color="#DB147F"
                />
                <Text style={{ marginLeft: 10 }}>Total Centres</Text>
              </View>
              <Text>Khua</Text>
            </View>
            <View style={{ paddingVertical: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons
                  name="storefront-outline"
                  size={20}
                  color="#DB147F"
                />
                <Text style={{ marginLeft: 10 }}>Total Centres</Text>
              </View>
              <Text>Khua</Text>
            </View>
          </ScrollView>
        </View>
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
