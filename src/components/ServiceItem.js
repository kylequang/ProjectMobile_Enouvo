import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CircleBorder from './CircleBorder';

const ServiceItem = ({ icon, title, time, money }) => {
  return (
    <View style={styles.row}>
      <CircleBorder
        size={50}
        borderWidth={2}
        backgroundColor="#FFF0FB"
        marginTop={12}
      >
        <Image source={icon} />
      </CircleBorder>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.time}>${money}/ full day </Text>
      </View>
    </View>
  );
};

export default ServiceItem;

const styles = StyleSheet.create({
  icon: {
    width: 50,
    backgroundColor: '#FFF0FB',
    height: '35%',
    borderRadius: 12,
    marginLeft: 30,
    marginTop: 16,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 16,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  content: {
    alignItems: 'baseline',
    margin: 16,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '300',
  },
});
