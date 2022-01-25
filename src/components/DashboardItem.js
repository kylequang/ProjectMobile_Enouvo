import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import CircleBorder from './CircleBorder'
const DashboardItem = ({ dashboard, id }) => {
  return (
    <View style={styles.cardContent} key={id}>
      <View style={styles.cardHeader}>
        <CircleBorder
          size={40}
          borderWidth={2}
          backgroundColor={dashboard.backgroundColor}
          marginTop={-8}
        >
          <MaterialCommunityIcons
            name={dashboard.icon}
            size={16}
            color={dashboard.color}
          />
        </CircleBorder>
        <Text style={styles.styleTextTitle}>{dashboard.title}</Text>
        <Text style={[styles.countNumber, { color: dashboard.color }]}>
          {dashboard.numberTitle}
        </Text>
      </View>
      <View style={styles.cardLine}></View>
      <View style={styles.cardFrame}>
        <View style={styles.row}>
          <Text style={styles.styleText}>{dashboard.text1}</Text>
          <Text style={styles.styleText}>{dashboard.value1}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.styleText}>{dashboard.text2}</Text>
          <Text style={styles.styleText}>{dashboard.value2}</Text>
        </View>
        <View style={styles.row}>
        <View style={styles.containText3}>
          <Text style={styles.styleText}>{dashboard.text3}</Text>
          </View>
            <Text style={styles.styleText}>{dashboard.value3}</Text>
          
        </View>
      </View>
    </View>
  )
}

export default DashboardItem

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    // flexWrap:'wrap',
    justifyContent: 'space-between',
  },
  cardContent: {
    height: 180,
    borderColor: '#F2F2F2',
    padding: 16,
    marginBottom: 17,
    position: 'relative',
    top: -50,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  cardHeader: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLine: {
    height: 1,
    marginBottom: 15,
    backgroundColor: '#F2F2F2',
  },
  cardFrame: {
    height: 102,
    justifyContent: 'space-between',
  },
  styleTextTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#25282B',
    marginLeft: -125,
  },
  countNumber: {
    fontSize: 20,
  },
  styleText: {
    fontSize: 16,
    fontWeight: '400',
  },
  containText3:{
    flexDirection: 'row', flexWrap: 'wrap', width: '50%'
  }
})
