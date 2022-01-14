import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const CentreItem = ({
  img,
  number,
  logo,
  title,
  mapText,
  babyText,
  backgroundColor,
  color,
  kindiText,
  waitlistText,
  serviceText,
}) => {
  return (
    <View style={styles.mainCard}>
      <View>
        <Image source={img} style={styles.img} />
        <View style={styles.imgNumber}>
          <Text style={styles.numberText}>{number}</Text>
        </View>
        <View style={styles.logoImg}>
          <Image source={logo} />
        </View>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.mainTitle}>{title}</Text>
        <View style={styles.mainText}>
          <Image
            source={require('../../assets/icons/ic-map.png')}
            style={styles.icon}
          />
          <Text style={styles.mainSub}>{mapText}</Text>
        </View>
        <View style={[styles.mainText, { justifyContent: 'space-between' }]}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../assets/icons/ic-baby.png')}
              style={styles.icon}
            />
            <Text style={styles.mainSub}>{babyText}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../assets/icons/ic-wailist.png')}
              style={styles.icon}
            />
            <Text style={styles.mainSub}>{waitlistText}</Text>
          </View>
        </View>
        <View
          style={[
            styles.mainText,
            {
              justifyContent: 'space-between',
            },
          ]}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/icons/ic-kincare.png')} />
            <TouchableOpacity
              style={[styles.kindiCareButton, { backgroundColor }]}
              // onPress={()=>()}
            >
              <Text style={[styles.kindiCareText, { color }]}>{kindiText}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../assets/icons/ic-service.png')}
              style={styles.icon}
            />
            <Text style={[styles.mainSub, { marginRight: 15 }]}>
              {serviceText}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CentreItem;

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginTop: 20,
  },
  img: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  icon: {
    marginTop: 4,
  },
  imgNumber: {
    position: 'absolute',
    top: 12,
    left: 10,
    width: 35,
    height: 30,
    padding: 5,
    backgroundColor: '#DB147F',
    borderRadius: 6,
  },
  numberText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  logoImg: {
    position: 'absolute',
    right: 10,
    bottom: 12,
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  mainContent: {
    padding: 15,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D1F21',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.02,
  },
  mainText: {
    flexDirection: 'row',
    marginTop: 12,
  },
  kindiCareButton: {
    marginTop: -4,
    marginLeft: 10,
    padding: 5,
    borderRadius: 6,
  },
  kindiCareText: {
    alignContent: 'center',
    fontSize: 12,
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0.02,
  },
  mainSub: {
    marginLeft: 10,
    fontSize: 14,
    color: '#2D1F21',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.02,
    alignContent: 'center',
  },
});
