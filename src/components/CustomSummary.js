import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const CustomSummary = ({ display }) => {
  return (
    <View style={display}>
      <View>
        <Text style={styles.text}>General Information</Text>
        <View style={styles.summaryInform}>
          <Image source={require('../../assets/icons/ic-map-2.png')} />
          <Text style={styles.informText}>
            221 Ferrars Street, South Melbourne,{'\n'} VIC 3205
          </Text>
        </View>
        <View style={styles.summaryInform}>
          <Image source={require('../../assets/icons/ic-centre.png')} />
          <Text style={styles.informText}>Goodstart Early Learning</Text>
        </View>
        <View style={styles.summaryInform}>
          <Image source={require('../../assets/icons/ic-outdoor.png')} />
          <Text style={styles.informText}>Centre-based Care</Text>
        </View>
        <View style={styles.summaryInform}>
          <Image source={require('../../assets/icons/ic-calendar.png')} />
          <Text style={styles.informText}>01 January 2012</Text>
        </View>
        <View style={styles.summaryInform}>
          <Image source={require('../../assets/icons/ic-Kindi.png')} />
          <View style={styles.kindiView}>
            <TouchableOpacity
              style={[styles.kindiCareButton, { backgroundColor: '#E9F4FF' }]}
              // onPress={()=>()}
            >
              <Text style={[styles.kindiCareText, { color: '#32A4FC' }]}>
                KindiCare Basic
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.divider}></View>
      <View>
        <Text style={styles.text}>Contact Info</Text>
        <View style={styles.summaryInform}>
          <Image source={require('../../assets/icons/ic-phone.png')} />
          <Text style={styles.informText}>1300 001 154</Text>
        </View>
        <View style={styles.summaryInform}>
          <Image source={require('../../assets/icons/EnvelopeSimple.png')} />
          <Text style={styles.informText}>
            goodstartearlylearning@gmail.com
          </Text>
        </View>
        <View style={styles.summaryInform}>
          <Image source={require('../../assets/icons/ic-arrow.png')} />
          <Text style={[styles.informText, { color: '#DB147F' }]}>
            https://www.goodstart.org.au/
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomSummary;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  summaryInform: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  informText: {
    width: '90%',
    fontSize: 16,
    color: '#171725',
    letterSpacing: 0.02,
  },
  kindiView: {
    width: '90%',
  },
  kindiCareButton: {
    padding: 5,
    borderRadius: 6,
    width: '39%',
    marginTop: -5,
  },
  kindiCareText: {
    alignContent: 'center',
    fontSize: 14,
    letterSpacing: 0.02,
    lineHeight: 24,
  },
});
