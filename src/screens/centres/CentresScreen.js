import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  Modal,
  SafeAreaView,
  Alert,
  FlatList,
  StatusBar, LogBox,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/Header';
import Item from '../../components/Item';
import { CENTRE_DATA } from '../../services/centre';
import { SLIDER_DATA } from '../../services/slideCenter';
import CentreItem from '../../components/CentreItem';
import CentreSliderItem from '../../components/CentreSliderItem';
import { getAllCentres, getAllNameofCentre } from '../../services/getData';
export default function CentresScreen() {
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();
  const [centers, setCenters] = useState([]);

  useEffect(async () => {
    LogBox.ignoreLogs(['Setting a timer']);
    setCenters(await getAllCentres())
    console.log( await getAllNameofCentre())
  }, []);

  const renderItem = ({ item }) => {
    const center=item
    const navigateToDetail = (id) => {
      setSelectedId(id);
      setModalVisible(false);
     
      navigation.navigate('Centre Details', { item})
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {SLIDER_DATA.map((item, id) => {
              return (
                <CentreSliderItem
                  key={id}
                  icon={item.icon}
                  textTitle={item.textTitle}
                  total={item.total}
                  ellipseColor={item.ellipseColor}
                  key={item.id}
                />
              );
            })}
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
            centers && centers.map((center, id) => {
              return (
                <CentreItem center={center} key={id} />
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
                  // data={CENTRE_DATA}
                  data={centers}
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