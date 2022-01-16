import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function FeatureScreen(props) {

  return (
    <ScrollView>
      <View style={styles.container}>
        {props.feature.map((item, key) => {
          return (
            <View style={styles.row} key={key}>
              <View style={{ flexDirection: 'row', padding: 15 }}>
                <View style={{ width: 30, alignItems: 'center' }}>
                  <FontAwesome5 name={item.icon} color="#333" size={20} />
                </View>

                <Text
                  style={{ fontSize: 15, color: '#2D1F21', marginLeft: 20 }}
                >
                  {item.name}
                </Text>
              </View>
              <Switch
                trackColor={{ false: '#BEBEBE', true: '#DB147F' }}
                // thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                value={item.status}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  Text: {
    fontSize: 25,
  },
});
