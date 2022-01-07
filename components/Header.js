import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.contentHeader}>
        <MaterialCommunityIcons name={props.iconName} size={30} color="#fff" />
        <Text style={styles.styleText}>{props.title} </Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={24}
          color="#fff"
          style={{ marginTop: 5, marginLeft: -50 }}
        />
        <MaterialIcons
          name={props.iconLeft}
          size={24}
          color="#fff"
          style={{ marginTop: 4 }}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 150,
    width: '100%',
    backgroundColor: '#DB147F',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    paddingVertical: 35,
    paddingHorizontal: 20,
  },
  contentHeader: {
    marginTop: 40,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  styleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 5,
    marginLeft: -35,
  },
});
