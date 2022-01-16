import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5} from '@expo/vector-icons';
export default function ServiceScreen(props) {
 
  return (
    <ScrollView>
      <View style={styles.container}>
        {props.service.map((item) => {
          return (
            <View style={styles.row} key={item.id}>
              <View style={styles.icon}>
                <FontAwesome5 name="home" color="#DB147F" size={35} />
              </View>
              <View style={styles.content}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.time}>{item.hours}</Text>
                <Text style={styles.time}>${item.money}/ full day </Text>
              </View>
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
    width: '100%',
    alignItems: 'center',
  },
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
  },
  content: {
    alignItems: 'baseline',
    margin: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '300',
  },
});
