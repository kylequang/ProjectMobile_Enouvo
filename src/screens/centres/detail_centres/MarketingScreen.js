import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import CardMarketing from '../../../components/CardMarketing';
import ModalMarketing from '../../../components/ModalMarketing';

export default function MarketingScreen() {
  const [isEnabledSpec, setIsEnabledSpec] = useState(false);
  const [isEnabledFeat, setIsEnabledFeat] = useState(false);
  const featSwitch = () => setIsEnabledFeat((previousState) => !previousState);
  const specSwitch = () => setIsEnabledSpec((previousState) => !previousState);
  const [featModalVisible, setModalVisibleFeat] = useState(false);
  const [specModalVisible, setModalVisibleSpec] = useState(false);
  return (
    <View style={styles.container}>
       <CardMarketing title='Featured Listing' 
      func={() => setModalVisibleFeat(true)}
      money='$50'
      specSwitch={featSwitch}
      isEnabledSpec={isEnabledFeat}>
      </CardMarketing>
      <CardMarketing title='Special Offer' 
      func={() => setModalVisibleSpec(true)}
      money='$30'
      specSwitch={specSwitch}
      isEnabledSpec={isEnabledSpec}>
      </CardMarketing>
      <View>
        {/* <Modal visible={featModalVisible} transparent={true}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <View style={styles.modalH}>
                <Text style={styles.modalTitle}>Featured Listing</Text>
              </View>
              <Ionicons
                name="md-close-outline"
                size={24}
                color={'#2D1F21'}
                onPress={() => setModalVisibleFeat(!featModalVisible)}
              />
            </View>

            <View style={styles.modalContent}>
              <View
                style={{
                  height: 1,
                  width: 'auto',

                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#F1F1F5',
                  paddingHorizontal: 16,
                }}
              />
              <Text style={styles.modalText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                erat tempor scelerisque sit adipiscing velit. Commodo erat
                tempor scelerisque sit adipiscing velit.
              </Text>
            </View>
          </View>
        </Modal> */}
        {/* <Modal visible={specModalVisible} transparent={true}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <View style={styles.modalH}>
                <Text style={styles.modalTitle}>Special Offer</Text>
              </View>
              <Ionicons
                name="md-close-outline"
                size={24}
                color={'#2D1F21'}
                onPress={() => setModalVisibleSpec(!specModalVisible)}
              />
            </View>

            <View style={styles.modalContent}>
              <View
                style={{
                  height: 1,
                  width: 'auto',

                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#F1F1F5',
                  paddingHorizontal: 16,
                }}
              />
              <Text style={styles.modalText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                erat tempor scelerisque sit adipiscing velit. Commodo erat
                tempor scelerisque sit adipiscing velit.
              </Text>
            </View>
          </View>
        </Modal> */}
      <ModalMarketing title='Featured Listing' 
      func={() => setModalVisibleFeat(!featModalVisible)}
      visible={featModalVisible}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
        erat tempor scelerisque sit adipiscing velit."></ModalMarketing>
        <ModalMarketing title='Special Offer' 
      func={() => setModalVisibleSpec(!specModalVisible)}
      visible={specModalVisible}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></ModalMarketing>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  //  block: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   backgroundColor: '#ffff',
  //   marginHorizontal: 20,
  //   marginVertical: 8,
  //   padding: 16,
  //   borderRadius: 12,
  // },
  // header: {
  //   flexDirection: 'row',
  // },
  // title: {
  //   fontWeight: '700',
  //   fontSize: 14,
  //   lineHeight: 24,
  // },
 
  // modalView: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 'auto',
  //   backgroundColor: '#ffff',
  //   borderTopRightRadius: 12,
  //   borderTopLeftRadius: 12,
  // },
  // modalHeader: {
  //   width: '100%',
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: 19.75,
  //   alignItems: 'center',
  // },
  // modalH: {
  //   paddingLeft: '30%',
  // },
  // modalTitle: {
  //   fontWeight: '700',
  //   fontSize: 18,
  //   lineHeight: 24,
  //   paddingVertical: 20,
  // },
  // modalText: {
  //   padding: 16,
  //   paddingBottom: 40,
  // },
});
