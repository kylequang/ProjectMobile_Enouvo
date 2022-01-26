import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
const Header = ({
  iconName,
  title,
  iconLeft,
  marginLeft,
  marginRight,
  onPress,
}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.header}>
      <View style={styles.contentHeader}>
        <MaterialCommunityIcons name={iconName} size={30} color="#fff" />
        <Text style={[styles.styleText, { marginLeft }]}>{title}</Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={24}
          color="#fff"
          style={{ marginTop: 4, marginRight }}
          onPress={onPress}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Add Centre')
          }}
        >
          <MaterialIcons
            name={iconLeft}
            size={24}
            color="#fff"
            style={{ marginTop: 4 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    height: 130,
    width: '100%',
    backgroundColor: '#DB147F',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  contentHeader: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  styleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 5,
  },
})
