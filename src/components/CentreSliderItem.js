import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CircleBorder from './CircleBorder';

const CentreSliderItem = ({icon, textTitle, total, ellipseColor }) => {
  return (
    <View style={styles.sliderCard} >
      <View style={styles.row}>
        <CircleBorder
          size={40}
          borderWidth={2}
          backgroundColor={ellipseColor}
          marginTop={-8}
        >
          <Image source={icon} />
        </CircleBorder>
        <Text style={styles.sliderTitle}>{textTitle}</Text>
      </View>
      <Text style={styles.sliderText}>{total}</Text>
    </View>
  );
};

export default CentreSliderItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  sliderCard: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginLeft: 15,
    borderRadius: 12,
  },
  sliderTitle: {
    marginLeft: 10,
    color: '#2D1F21',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 24,
    letterSpacing: 0.02,
  },
  sliderText: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    marginTop: 10,
  },
});