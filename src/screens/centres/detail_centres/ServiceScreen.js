import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ServiceItem from '../../../components/ServiceItem';
export default function ServiceScreen() {
  const services = [
    {
      id: 1,
      icon: require('../../../../assets/icons/ic-baby-blink.png'),
      title: 'Long Day Care',
      time: '0 to 12 months',
      money: 112.0,
    },
    {
      id: 2,
      icon: require('../../../../assets/icons/ic-abc.png'),
      title: 'Pre-School/ Kindergarten',
      time: '0 to 12 months',
      money: 112.0,
    },
    {
      id: 3,
      icon: require('../../../../assets/icons/ic-bag.png'),
      title: 'Before & After School Care',
      time: '0 to 12 months',
      money: 112.0,
    },
    {
      id: 4,
      icon: require('../../../../assets/icons/ic-family.png'),
      title: 'Family Day Care',
      time: '0 to 12 months',
      money: 112.0,
    },
    {
      id: 5,
      icon: require('../../../../assets/icons/ic-luggage.png'),
      title: 'Vacation Care',
      time: '0 to 12 months',
      money: 112.0,
    },
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {services.map((item) => {
          return (
            <ServiceItem
              icon={item.icon}
              title={item.title}
              time={item.time}
              money={item.money}
              key={item.id}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});
