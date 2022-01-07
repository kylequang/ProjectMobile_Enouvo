import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../components/Header';
import CircleBorder from '../components/CircleBorder';
export default function Dashboard() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        iconName="home-outline"
        title="Goodstart Early Learning ABC"
        iconLeft="add-box"
      />
      <View style={styles.contentContainer}>
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <CircleBorder size={40} borderWidth={2} backgroundColor="#FFF4EC">
              <Foundation name="page" size={16} color="#FB8429" />
            </CircleBorder>
            <Text style={styles.styleTextTitle}>Applications</Text>
            <Text style={[styles.countNumber, { color: '#FB8429' }]}>17</Text>
          </View>
          <View style={styles.cardLine}></View>
          <View style={styles.cardFrame}>
            <View style={styles.row}>
              <Text style={styles.styleText}>Open Application Value</Text>
              <Text style={styles.styleText}>116,688,8</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.styleText}>Total Waitlisted</Text>
              <Text style={styles.styleText}>3</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.styleText}>Waitlist Value</Text>
              <Text style={styles.styleText}>$29,749 p.a</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <CircleBorder size={40} borderWidth={2} backgroundColor="#E9F4FF">
              <MaterialCommunityIcons
                name="sine-wave"
                size={16}
                color="#32A4FC"
              />
            </CircleBorder>
            <Text style={styles.styleTextTitle}>Total Activities</Text>
            <Text style={[styles.countNumber, { color: '#32A4FC' }]}>17</Text>
          </View>
          <View style={styles.cardLine}></View>
          <View style={styles.cardFrame}>
            <View style={styles.row}>
              <Text style={styles.styleText}>Mailbox Received</Text>
              <Text style={styles.styleText}>342</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.styleText}>Mailbox Awaiting Reply</Text>
              <Text style={styles.styleText}>6</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.styleText}>Task Overdue</Text>
              <Text style={styles.styleText}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <CircleBorder size={40} borderWidth={2} backgroundColor="#FFF0FB">
              <MaterialCommunityIcons
                name="storefront-outline"
                size={16}
                color="#DB147F"
              />
            </CircleBorder>
            <Text style={styles.styleTextTitle}>Total Centres </Text>
            <Text style={[styles.countNumber, { color: '#DB147F' }]}>32</Text>
          </View>
          <View style={styles.cardLine}></View>
          <View style={styles.cardFrame}>
            <View style={styles.row}>
              <Text style={styles.styleText}>Total Places</Text>
              <Text style={styles.styleText}>160</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.styleText}>Enrolment Coverage</Text>
              <Text style={styles.styleText}>72%</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.styleText}>
                Average Enquiry{'\n'} Response Time
              </Text>
              <Text style={styles.styleText}>24 hrs 36 mins</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    height: 180,
    borderColor: '#F2F2F2',
    padding: 16,
    marginBottom: 16,
    marginTop: 16,
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
});
