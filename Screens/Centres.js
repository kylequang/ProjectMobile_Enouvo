import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  SafeAreaView,
  Alert,
  FlatList,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Header from '../components/Header';
import CircleBorder from '../components/CircleBorder';
import { CENTRE_DATA } from '../service/centre';
import Item from '../components/Item';
export default function Centres() {
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const navigateToDetail = (id) => {
      setSelectedId(id);
      setModalVisible(false);
      navigation.navigate('Centre Details', { screen: 'Summary' });
      // navigation.navigate('Centre Details');
    };
    const backgroundColor = item.id === selectedId ? '#FFF0FB' : '#fff';
    const color = item.id === selectedId ? '#DB147F' : '#ACB2B8';
    const icon =
      item.id === selectedId
        ? 'radio-button-checked'
        : 'radio-button-unchecked';

    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
        onPress={() => navigateToDetail(item.id)}
        backgroundColor={{ backgroundColor }}
        color={color}
        icon={icon}
      />
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <Header
          iconName="storefront-outline"
          title="All Centres"
          iconLeft="add-box"
          marginLeft={5}
          marginRight={170}
          onPress={() => setModalVisible(true)}
        />
        <View style={styles.sliderContainer}>
          <ScrollView horizontal={true} hide>
            <View style={styles.sliderCard}>
              <View style={{ flexDirection: 'row' }}>
                <CircleBorder
                  size={40}
                  borderWidth={2}
                  backgroundColor="#FFF0FB"
                >
                  <MaterialCommunityIcons
                    name="storefront-outline"
                    size={16}
                    color="#DB147F"
                  />
                </CircleBorder>
                <Text style={{ marginLeft: 10 }}>Total Centres</Text>
              </View>
              <Text style={styles.sliderText}>122</Text>
            </View>
            <View style={styles.sliderCard}>
              <View style={{ flexDirection: 'row' }}>
                <CircleBorder
                  size={40}
                  borderWidth={2}
                  backgroundColor="#FFF4EC"
                >
                  <Ionicons name="location-outline" size={16} color="#FB8429" />
                </CircleBorder>
                <Text style={{ marginLeft: 10 }}>Total Places</Text>
              </View>
              <Text style={styles.sliderText}>3200</Text>
            </View>
            <View style={styles.sliderCard}>
              <View style={{ flexDirection: 'row' }}>
                <CircleBorder
                  size={40}
                  borderWidth={2}
                  backgroundColor="#E9F4FF"
                >
                  <Feather name="dollar-sign" size={16} color="#32A4FC" />
                </CircleBorder>
                <Text style={{ marginLeft: 10 }}>Est. Earning</Text>
              </View>
              <Text style={styles.sliderText}>$3,465,000</Text>
            </View>
            <View style={styles.sliderCard}>
              <View style={{ flexDirection: 'row' }}>
                <CircleBorder
                  size={40}
                  borderWidth={2}
                  backgroundColor="#FEEFEF"
                >
                  <FontAwesome5
                    name="clipboard-list"
                    size={16}
                    color="#E52828"
                  />
                </CircleBorder>
                <Text style={{ marginLeft: 10 }}>Waitlist Value </Text>
              </View>
              <Text style={styles.sliderText}>$3,465</Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchContent}>
          <Ionicons
            name="search-outline"
            size={20}
            color="gray"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search Centre name"
            value={search}
            onChangeText={(text) => setSearch(text)}
            style={styles.searchInput}
          />
        </View>
        <View style={styles.sort}>
          <Image source={require('../assets/sort.png')} />
        </View>
      </View>

      <View style={styles.mainContainer}>
        <ScrollView style={styles.mainScroll}>
          <View style={styles.mainCard}>
            <View style={styles.imageCard}>
              <Image
                source={require('../assets/centres/Brisbane-Adelaide-Street-opens.jpg')}
                style={styles.img}
              />
              <View style={styles.imgNumber}>
                <Text style={styles.numberText}>9.8</Text>
              </View>
              <View style={styles.logoImg}>
                <Image source={require('../assets/centres/product1.png')} />
              </View>
            </View>
            <View style={styles.mainContent}>
              <Text style={styles.mainTitle}>
                Castle Hill Montessori Academy
              </Text>
              <View style={styles.mainText}>
                <Ionicons name="location-outline" size={20} color="#2D1F21" />
                <Text style={styles.mainSub}>
                  1 Kerrs Road, Castle Hill, NSW 2154
                </Text>
              </View>
              <View
                style={[styles.mainText, { justifyContent: 'space-between' }]}
              >
                <View style={{ flexDirection: 'row' }}>
                  <MaterialCommunityIcons
                    name="baby-face-outline"
                    size={20}
                    color="#2D1F21"
                  />
                  <Text style={styles.mainSub}>90 childrens</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <MaterialCommunityIcons
                    name="clipboard-text-outline"
                    size={20}
                    color="#2D1F21"
                  />

                  <Text style={styles.mainSub}>48 waitlisted</Text>
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
                  <FontAwesome5
                    name="temperature-low"
                    size={20}
                    color="#2D1F21"
                  />

                  <TouchableOpacity
                    style={[
                      styles.kindiCareButton,
                      { backgroundColor: '#E9F4FF' },
                    ]}
                    // onPress={()=>()}
                  >
                    <Text style={[styles.kindiCareText, { color: '#32A4FC' }]}>
                      KindiCare Basic
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <FontAwesome5
                    name="hand-holding-water"
                    size={20}
                    color="#2D1F21"
                  />
                  <Text style={[styles.mainSub, { marginRight: 15 }]}>
                    4 services
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.mainCard}>
            <View style={styles.imageCard}>
              <Image
                source={require('../assets/centres/Brisbane-Adelaide-Street-opens.jpg')}
                style={styles.img}
              />
              <View style={styles.imgNumber}>
                <Text style={styles.numberText}>9.8</Text>
              </View>
              <View style={styles.logoImg}>
                <Image source={require('../assets/centres/product1.png')} />
              </View>
            </View>
            <View style={styles.mainContent}>
              <Text style={styles.mainTitle}>
                Castle Hill Montessori Academy
              </Text>
              <View style={styles.mainText}>
                <Ionicons name="location-outline" size={20} color="#2D1F21" />
                <Text style={styles.mainSub}>
                  1 Kerrs Road, Castle Hill, NSW 2154
                </Text>
              </View>
              <View
                style={[styles.mainText, { justifyContent: 'space-between' }]}
              >
                <View style={{ flexDirection: 'row' }}>
                  <MaterialCommunityIcons
                    name="baby-face-outline"
                    size={20}
                    color="#2D1F21"
                  />
                  <Text style={styles.mainSub}>90 childrens</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <MaterialCommunityIcons
                    name="clipboard-text-outline"
                    size={20}
                    color="#2D1F21"
                  />

                  <Text style={styles.mainSub}>48 waitlisted</Text>
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
                  <FontAwesome5
                    name="temperature-low"
                    size={20}
                    color="#2D1F21"
                  />

                  <TouchableOpacity
                    style={[
                      styles.kindiCareButton,
                      { backgroundColor: '#E9F4FF' },
                    ]}
                    // onPress={()=>()}
                  >
                    <Text style={[styles.kindiCareText, { color: '#32A4FC' }]}>
                      KindiCare Basic
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <FontAwesome5
                    name="hand-holding-water"
                    size={20}
                    color="#2D1F21"
                  />
                  <Text style={[styles.mainSub, { marginRight: 15 }]}>
                    4 services
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons
                  name="md-close-outline"
                  size={24}
                  color="black"
                  onPress={() => setModalVisible(!modalVisible)}
                />
                <Text style={styles.modalText}>Select Centre</Text>
              </View>
              <Divider style={{ marginTop: 8 }} />
              <View>
                <View
                  style={[
                    styles.searchContent,
                    {
                      borderWidth: 1,
                      borderColor: 'D3CCCC',
                      marginTop: 10,
                      width: '100%',
                    },
                  ]}
                >
                  <Ionicons
                    name="search-outline"
                    size={20}
                    color="gray"
                    style={styles.searchIcon}
                  />
                  <TextInput
                    placeholder="Search Centre name"
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    style={styles.searchInput}
                  />
                </View>
              </View>
              <View style={{ marginTop: 5, backgroundColor: '#fff' }}>
                <FlatList
                  data={CENTRE_DATA}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  extraData={selectedId}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  sliderContainer: {
    position: 'absolute',
    top: 100,
  },
  sliderCard: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginLeft: 15,
    borderRadius: 6,
  },
  sliderText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 220,
    paddingHorizontal: 15,
    width: '100%',
  },
  searchContent: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
  },
  searchIcon: {
    marginTop: 3,
  },
  searchInput: {
    marginLeft: 15,
  },
  sort: {
    width: '15%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  mainScroll: {
    flex: 1,
    paddingHorizontal: 15,
  },
  mainContainer: {
    position: 'absolute',
    top: 270,
    width: '100%',
  },
  mainCard: {
    backgroundColor: 'white',
    borderRadius: 6,
    marginTop: 20,
  },
  imageCard: {
    // borderTopStartRadius: 6,
  },
  img: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
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
  },
  mainTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#2D1F21',
  },
  mainText: {
    flexDirection: 'row',
    marginTop: 12,
  },
  mainSub: {
    marginLeft: 10,
    fontSize: 17,
    color: '#2D1F21',
    alignContent: 'center',
  },
  kindiCareButton: {
    marginTop: -4,
    marginLeft: 10,
    padding: 5,
    borderRadius: 6,
  },
  kindiCareText: {
    alignContent: 'center',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    marginTop: 100,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 17,
    color: '#2D1F21',
    marginLeft: 110,
    fontWeight: 'bold',
  },
});
