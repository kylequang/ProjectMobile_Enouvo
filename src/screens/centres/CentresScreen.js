import React, { useState } from 'react';
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
  StatusBar,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/Header';
import { CENTRE_DATA } from '../../services/centre';
import { SELECT_CENTRES } from '../../services/selectCentres';
import { SLIDER_DATA } from '../../services/sliderCentres';
import SelectItem from '../../components/SelectItem';
import CentreSliderItem from '../../components/CentreSliderItem';
import CentreItem from '../../components/CentreItem';
export default function CentresScreen() {
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#FFF0FB' : '#fff';
    const color = item.id === selectedId ? '#DB147F' : '#ACB2B8';
    const icon =
      item.id === selectedId
        ? 'radio-button-checked'
        : 'radio-button-unchecked';

    return (
      <SelectItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        // onPress={() => navigateToDetail(item.id)}
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
            {SLIDER_DATA.map((item) => {
              return (
                <CentreSliderItem
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
          <Image source={require('../../../assets/icons/ic-filter.png')} />
        </View>
      </View>

      <SafeAreaView style={styles.mainContainer}>
        <ScrollView
          style={styles.mainScroll}
          showsVerticalScrollIndicator={false}
        >
          {CENTRE_DATA.map((item) => {
            return (
              <CentreItem
                img={item.img}
                number={item.number}
                logo={item.logo}
                title={item.title}
                mapText={item.mapText}
                babyText={item.babyText}
                backgroundColor={item.kindiBtnColor}
                color={item.kindiColor}
                kindiText={item.kindiText}
                waitlistText={item.waitlistText}
                serviceText={item.serviceText}
                key={item.id}
              />
            );
          })}
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
                  data={SELECT_CENTRES}
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
    borderColor: '#F2F2F2',
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
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingTop: 15,
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
