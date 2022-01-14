import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { HOUR_DATA } from '../../../services/hourData';
import HourItem from '../../../components/HourItem';
export default function HoursScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {HOUR_DATA.map((item) => {
          return <HourItem title={item.title} key={item.id} />;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
