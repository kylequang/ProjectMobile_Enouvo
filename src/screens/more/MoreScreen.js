import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {auth} from '../../database/firebase'

export default function MoreScreen({ navigation }) {
  return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('MoreDetail')}
      >
        <Ionicons name="person-circle" size={45} color={'#ACB2B8'} />
        <View style={styles.userName}>
        <Text style={styles.Text}>{auth.currentUser?.email}</Text>
          <Text style={styles.ChildText}>Provider User (Admin)</Text>
        </View>
        <View style={styles.iconArrow}>
          <Ionicons name="chevron-forward-sharp" size={20} color={'black'} />
        </View>
      </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    paddingVertical: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingLeft: 16,
  },
  iconArrow: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  userName: {
    paddingLeft: 16,
    flexDirection: 'column',
  },
  Text: {
    fontWeight: '700',
    fontSize: 16,
    color: '#171725',
  },
  ChildText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#171725',
  },
});
