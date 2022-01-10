import React from 'react';
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
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import CircleBorder from '../../components/CircleBorder';

export default function Summary() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.containerContent}>
          <View style={styles.informContainer}>
            <View style={styles.informContent}>
              <Image source={require('../../assets/centres/centre1.png')} />
              <View style={{ marginLeft: 10, marginTop: 12 }}>
                <Text style={styles.text}>
                  Goodstart Early{'\n'}Learning ABC
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Entypo name="dot-single" size={20} color="#36BF57" />
                  <Text
                    style={{
                      color: '#36BF57',
                      fontWeight: 'bold',
                      fontSize: 15,
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
              <MaterialIcons
                name="keyboard-arrow-up"
                size={16}
                color="#FFFFFF"
              />
            </CircleBorder>
          </View>
          <Divider style={styles.divider} />
          <View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                General Information
              </Text>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Ionicons name="location-outline" size={20} color="#DB147F" />
                <Text style={styles.informText}>
                  221 Ferrars Street, South Melbourne,{'\n'} VIC 3205
                </Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <MaterialCommunityIcons
                  name="storefront-outline"
                  size={20}
                  color="#DB147F"
                />
                <Text style={styles.informText}>Goodstart Early Learning</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <MaterialCommunityIcons
                  name="blood-bag"
                  size={20}
                  color="#DB147F"
                />
                <Text style={styles.informText}>Centre-based Care</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <MaterialIcons
                  name="calendar-today"
                  size={20}
                  color="#DB147F"
                />
                <Text style={styles.informText}>01 January 2012</Text>
              </View>
            </View>
            <View style={styles.contactContainer}>
              <FontAwesome5 name="temperature-low" size={20} color="#DB147F" />
              <TouchableOpacity
                style={[styles.kindiCareButton, { backgroundColor: '#E9F4FF' }]}
                // onPress={()=>()}
              >
                <Text style={[styles.kindiCareText, { color: '#32A4FC' }]}>
                  KindiCare Basic
                </Text>
              </TouchableOpacity>
            </View>
            <Divider style={styles.divider} />
            <View>
              <Text style={styles.text}>Contact Info</Text>
              <View style={styles.contactContainer}>
                <MaterialIcons name="phone" size={20} color="#DB147F" />
                <Text style={styles.contactText}>1300 001 154</Text>
              </View>
              <View style={styles.contactContainer}>
                <Ionicons name="md-mail-outline" size={20} color="#DB147F" />
                <Text style={styles.contactText}>
                  goodstartearlylearning@gmail.com
                </Text>
              </View>
              <View style={styles.contactContainer}>
                <Feather name="arrow-up-left" size={20} color="#DB147F" />
                <Text style={styles.contactText}>
                  https://www.goodstart.org.au/
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerContent}>
          <Text style={styles.text}>Enquiries Summary</Text>
          <Divider style={{ marginTop: 14 }} />
          <View style={styles.inquireContainer}>
            <View style={{ flexDirection: 'row' }}>
              <CircleBorder
                size={35}
                borderWidth={2}
                backgroundColor="#FFF0FB"
                marginTop={0}
              >
                <Ionicons name="md-heart-outline" size={16} color="#DB147F" />
              </CircleBorder>
              <Text style={styles.inquireText}>Total Enquiries</Text>
            </View>
            <Text style={styles.inquireNumber}>192</Text>
          </View>
          <View style={styles.inquireContainer}>
            <View style={{ flexDirection: 'row' }}>
              <CircleBorder
                size={35}
                borderWidth={2}
                backgroundColor="#E9F4FF"
                marginTop={0}
              >
                <Ionicons name="information" size={16} color="#32A4FC" />
              </CircleBorder>
              <Text style={styles.inquireText}>More Information</Text>
            </View>
            <Text style={styles.inquireNumber}>192</Text>
          </View>
          <View style={styles.inquireContainer}>
            <View style={{ flexDirection: 'row' }}>
              <CircleBorder
                size={35}
                borderWidth={2}
                backgroundColor="#EDF9F0"
                marginTop={0}
              >
                <MaterialCommunityIcons
                  name="chair-school"
                  size={16}
                  color="#36BF57"
                />
              </CircleBorder>
              <Text style={styles.inquireText}>Check for Vacancies</Text>
            </View>
            <Text style={styles.inquireNumber}>192</Text>
          </View>
          <View style={styles.inquireContainer}>
            <View style={{ flexDirection: 'row' }}>
              <CircleBorder
                size={35}
                borderWidth={2}
                backgroundColor="#F3EAFF"
                marginTop={0}
              >
                <Ionicons name="md-flag-outline" size={16} color="#BF2CF3" />
              </CircleBorder>
              <Text style={styles.inquireText}>Book a Tour or Visit</Text>
            </View>
            <Text style={styles.inquireNumber}>192</Text>
          </View>
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerContent: {
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    padding: 15,
  },
  informContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  informContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  informText: {
    marginLeft: 10,
    fontSize: 15,
  },
  divider: {
    marginTop: 15,
    marginBottom: 15,
  },
  kindiCareButton: {
    width: 125,
    marginTop: -4,
    marginLeft: 10,
    padding: 5,
    borderRadius: 6,
  },
  kindiCareText: {
    alignContent: 'center',
    fontSize: 15,
  },
  contactContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 15,
  },
  inquireContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  inquireText: {
    marginLeft: 15,
    marginTop: 5,
    fontSize: 15,
  },
  inquireNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 6,
  },
});
