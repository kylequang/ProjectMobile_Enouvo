import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { db } from '../../database/firebase';
import { collection, getDocs } from "firebase/firestore";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Alert,
  FlatList,
  StatusBar, LogBox,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { MaterialCommunityIcons, Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import Header from '../../components/Header';
import CircleBorder from '../../components/CircleBorder';
import Item from '../../components/Item';
import { CENTRE_DATA } from '../../services/centre';

export default function CentresScreen() {
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();

  const [centers, setCenters] = useState([]);

  useEffect(() => {
    LogBox.ignoreLogs(['Setting a timer']);
    const getCentres = async () => {
      const data = await getDocs(collection(db, 'Centres'));
      setCenters(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCentres();
  }, []);

  const renderItem = ({ item }) => {
    const navigateToDetail = (id) => {
      setSelectedId(id);
      setModalVisible(false);
      navigation.navigate('Centre Details', { screen: 'Summary' });
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
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
          >
            <View style={styles.sliderCard}>
              <View style={{ flexDirection: 'row' }}>
                <CircleBorder
                  size={40}
                  borderWidth={2}
                  backgroundColor="#FFF0FB"
                  marginTop={-8}
                >
                  <MaterialCommunityIcons
                    name="storefront-outline"
                    size={16}
                    color="#DB147F"
                  />
                </CircleBorder>
                <Text style={styles.sliderTitle}>Total Centres</Text>
              </View>
              <Text style={styles.sliderText}>122</Text>
            </View>
            <View style={styles.sliderCard}>
              <View style={{ flexDirection: 'row' }}>
                <CircleBorder
                  size={40}
                  borderWidth={2}
                  backgroundColor="#FFF4EC"
                  marginTop={-8}
                >
                  <Ionicons name="location-outline" size={16} color="#FB8429" />
                </CircleBorder>
                <Text style={styles.sliderTitle}>Total Places</Text>
              </View>
              <Text style={styles.sliderText}>3200</Text>
            </View>
            <View style={styles.sliderCard}>
              <View style={{ flexDirection: 'row' }}>
                <CircleBorder
                  size={40}
                  borderWidth={2}
                  backgroundColor="#E9F4FF"
                  marginTop={-8}
                >
                  <Feather name="dollar-sign" size={16} color="#32A4FC" />
                </CircleBorder>
                <Text style={styles.sliderTitle}>Est. Earning</Text>
              </View>
              <Text style={styles.sliderText}>$3,465,000</Text>
            </View>
            <View style={styles.sliderCard}>
              <View style={{ flexDirection: 'row' }}>
                <CircleBorder
                  size={40}
                  borderWidth={2}
                  backgroundColor="#FEEFEF"
                  marginTop={-8}
                >
                  <FontAwesome5
                    name="clipboard-list"
                    size={16}
                    color="#E52828"
                  />
                </CircleBorder>
                <Text style={styles.sliderTitle}>Waitlist Value </Text>
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
          <Image source={require('../../../assets/icons/sort.png')} />
        </View>
      </View>

      <SafeAreaView style={styles.mainContainer}>
        <ScrollView
          style={styles.mainScroll}
          showsVerticalScrollIndicator={false}
        >
          {
            centers && centers.map(center => {
              return (
                <TouchableOpacity key={center.id} onPress={() => { navigation.navigate('Centre Details',{center}) }}>
                  <View style={styles.mainCard} >
                    <View style={styles.imageCard}>
                      <Image
                        source={{ uri: center.image }}
                        style={styles.img}
                      />
                      <View style={styles.imgNumber}>
                        <Text style={styles.numberText}>9.8</Text>
                      </View>
                      <View style={styles.logoImg}>
                        <Image
                          source={require('../../../assets/images/centres/product1.png')}
                        />
                      </View>
                    </View>
                    <View style={styles.mainContent}>
                      <Text style={styles.mainTitle}>
                        {center.name}
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
                </TouchableOpacity>

              )
            })
          }
        </ScrollView>
      </SafeAreaView>
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
                  color="#2D1F21"
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
              <View
                style={{
                  marginTop: 8,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 8,
                }}
              >
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
    width: '100%',
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
    borderRadius: 12,
  },
  sliderTitle: {
    marginLeft: 10,
    color: '#2D1F21',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 24,
    letterSpacing: 0.02,
  },
  sliderText: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
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
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#D3CCCC',
    borderRadius: 8,
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
    position: 'absolute',
    height: 400,
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
  },
  mainContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    position: 'relative',
    bottom: 560,
    width: '100%',
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
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
  mainSub: {
    marginLeft: 10,
    fontSize: 14,
    color: '#2D1F21',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.02,
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
    fontSize: 12,
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0.02,
  },
  centeredView: {
    flex: 1,
    marginTop: 120,
  },
  modalView: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 20,
    shadowColor: '#FFFFFF',
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
    fontSize: 18,
    color: '#2D1F21',
    marginLeft: 110,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.02,
    textAlign: 'center',
  },
});