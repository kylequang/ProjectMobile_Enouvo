import React, { useEffect } from 'react';
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
import {
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  Feather,
} from '@expo/vector-icons';
import CircleBorder from '../../../components/CircleBorder';

export default function SummaryScreen(props) {
  useEffect(() => {

  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.containerContent}>
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
              <MaterialIcons
                name="keyboard-arrow-up"
                size={16}
                color="#FFFFFF"
              />
            </CircleBorder>
          </View>
          <View style={styles.divider}></View>
          <View>
            <View>
              <Text style={styles.text}>General Information</Text>
              {
                props.info.map((item) => (
                  <View style={styles.generalInform}>
                    <FontAwesome5 name={item.icon} size={20} color="#DB147F" />
                    <Text style={styles.informText}>
                      {item.name}
                    </Text>
                  </View>
                ))
              }

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
            <View style={styles.divider}></View>

            <View>
              <Text style={styles.text}>Contact Info</Text>
              {
                props.contact.map((item) => (
                  <View style={styles.contactContainer}>
                    <MaterialIcons name={item.icon} size={20} color="#DB147F" />
                    <Text style={[styles.contactText, { color: '#171725' }]}>
                      {item.name}
                    </Text>
                  </View>
                ))
              }
            </View>
          </View>
        </View>
        <View style={styles.containerContent}>
          <Text style={styles.text}>Enquiries Summary</Text>
          <View style={styles.divider}></View>
          {
            props.enquiries.map((item) => (
              <View style={styles.inquireContainer}>
                <View style={styles.row}>
                  <CircleBorder
                    size={35}
                    borderWidth={2}
                    backgroundColor="#FFF0FB"
                    marginTop={0}
                  >
                    <Ionicons name={item.icon} size={16} color="#DB147F" />
                  </CircleBorder>
                  <Text style={styles.inquireText}>{item.name}</Text>
                </View>
                <Text style={styles.inquireNumber}>{item.count}</Text>
              </View>
            ))
          }
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
  informText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#171725',
    letterSpacing: 0.02,
  },
  divider: {
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#F2F0F0',
  },
  generalInform: {
    flexDirection: 'row',
    marginTop: 10,
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
    fontSize: 14,
    letterSpacing: 0.02,
    lineHeight: 24,
  },
  contactContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    letterSpacing: 0.02,
    lineHeight: 24,
  },
  inquireContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  inquireText: {
    marginLeft: 15,
    marginTop: 6,
    fontSize: 14,
    fontFamily: 'Mulish',
    color: '#2D1F21',
  },
  inquireNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
    fontFamily: 'Mulish',
    color: '#2D1F21',
  },
});
