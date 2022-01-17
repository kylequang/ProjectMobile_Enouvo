import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CircleBorder from './CircleBorder';
const InquireItem = ({ icon, text, number, backgroundColor }) => {
  return (
    <View style={styles.inquireContainer}>
      <View style={styles.row}>
        <CircleBorder
          size={35}
          borderWidth={2}
          backgroundColor={backgroundColor}
          marginTop={0}
        >
          <Image source={icon} />
        </CircleBorder>
        <Text style={styles.inquireText}>{text}</Text>
      </View>
      <Text style={styles.inquireNumber}>{number}</Text>
    </View>
  );
};

export default InquireItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  inquireContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  inquireText: {
    marginLeft: 15,
    marginTop: 6,
    fontSize: 14,
    color: '#2D1F21',
  },
  inquireNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
    color: '#2D1F21',
  },
});
