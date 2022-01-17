import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import CircleBorder from '../../../components/CircleBorder';
import CustomSummary from '../../../components/CustomSummary';
import InquireItem from '../../../components/InquireItem';

export default function SummaryScreen() {
  const [show, setShow] = useState(false);
  const display = !show ? 'flex' : 'none';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.containerContent}>
          <TouchableOpacity onPress={() => setShow(!show)}>
            <View style={styles.informContainer}>
              <View style={styles.informContent}>
                <Image
                  source={require('../../../../assets/images/centres/centre1.png')}
                />
                <View style={styles.goodStartText}>
                  <Text style={styles.text}>
                    Goodstart Early{'\n'}Learning ABC
                  </Text>
                  <View style={styles.row}>
                    <Entypo name="dot-single" size={20} color="#36BF57" />
                    <Text
                      style={{
                        color: '#36BF57',
                        fontWeight: 'bold',
                        fontSize: 14,
                      }}
                    >
                      Active
                    </Text>
                  </View>
                </View>
              </View>

              <CircleBorder
                size={40}
                borderWidth={2}
                backgroundColor="#32A4FC"
                marginTop={24}
              >
                {show ? (
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={16}
                    color="#FFFFFF"
                  />
                ) : (
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={16}
                    color="#FFFFFF"
                  />
                )}
              </CircleBorder>
            </View>
          </TouchableOpacity>
          <View style={styles.divider}></View>
          <CustomSummary display={{ display }} />
        </View>
        <View style={styles.containerContent}>
          <Text style={styles.text}>Enquiries Summary</Text>
          <View style={styles.divider}></View>
          <InquireItem
            icon={require('../../../../assets/icons/ic-enquiry.png')}
            text="Total Enquiries"
            number={192}
            backgroundColor="#FFF0FB"
          />
          <InquireItem
            icon={require('../../../../assets/icons/ic-info.png')}
            text="More Information"
            number={192}
            backgroundColor="#E9F4FF"
          />
          <InquireItem
            icon={require('../../../../assets/icons/ic-chair.png')}
            text="Check for Vacancies"
            number={192}
            backgroundColor="#EDF9F0"
          />
          <InquireItem
            icon={require('../../../../assets/icons/ic-flag.png')}
            text="Book a Tour or Visit"
            number={192}
            backgroundColor="#F3EAFF"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 25,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  containerContent: {
    borderRadius: 12,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderWidth: 1,
    borderColor: '#F2F0F0',
  },
  row: {
    flexDirection: 'row',
  },
  informContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goodStartText: {
    marginLeft: 10,
    marginTop: 12,
  },
  informContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  divider: {
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#F2F0F0',
  },
});
