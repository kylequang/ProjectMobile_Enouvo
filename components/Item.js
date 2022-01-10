import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const Item = ({ item, onPress, backgroundColor, color, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
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

export default Item;

const styles = StyleSheet.create({
  item: {
    marginVertical: 5,
    padding: 6,
    borderRadius: 7,
  },
  title: {
    marginLeft: 10,
    marginTop: 10,
  },
  iconStyle: {
    marginTop: 8,
  },
});
