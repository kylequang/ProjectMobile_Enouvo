import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const SelectItem = ({ item, onPress, backgroundColor, color, icon }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, backgroundColor]}
      key={item.id}
    >
      <View style={styles.row}>
        <View style={styles.row}>
          <Image source={item.img} />
          <Text style={styles.title}> {item.name}</Text>
        </View>

        <MaterialIcons
          name={icon}
          size={24}
          color={color}
          style={styles.iconStyle}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SelectItem;

const styles = StyleSheet.create({
  item: {
    padding: 6,
    borderRadius: 7,
  },
  title: {
    marginLeft: 10,
    marginTop: 10,
    color: '#2D1F21',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0.02,
  },
  iconStyle: {
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
