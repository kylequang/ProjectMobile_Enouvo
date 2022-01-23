import React, { useState } from 'react';
import {
  Modal,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function MarketingScreen() {
  const [isEnabledSpec, setIsEnabledSpec] = useState(false);
  const [isEnabledFeat, setIsEnabledFeat] = useState(false);
  const featSwitch = () => setIsEnabledFeat((previousState) => !previousState);
  const specSwitch = () => setIsEnabledSpec((previousState) => !previousState);
  const [featModalVisible, setModalVisibleFeat] = useState(false);
  const [specModalVisible, setModalVisibleSpec] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <View style={styles.leftContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Featured Listing</Text>
            <TouchableOpacity>
              <Ionicons
                name="information-circle-sharp"
                size={14}
                color={'#857E7F'}
                onPress={() => setModalVisibleFeat(true)}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.money}>
            <Text style={{ fontSize: 20, fontWeight: '700', lineHeight: 32 }}>
              $50
            </Text>

            <Text style={{ fontWeight: '400' }}>/per month</Text>
          </Text>
        </View>
        <Switch
          style={styles.toggleSwitch}
          trackColor={{ false: '#F7F8F9', true: '#DB147F' }}
          thumbColor={'#ffff'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={featSwitch}
          value={isEnabledFeat}
        />
      </View>
      <View style={styles.block}>
        <View style={styles.leftContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Special Offer</Text>
            <TouchableOpacity>
              <Ionicons
                name="information-circle-sharp"
                size={14}
                color={'#857E7F'}
                onPress={() => setModalVisibleSpec(true)}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.money}>
            <Text style={{ fontSize: 20, fontWeight: '700', lineHeight: 32 }}>
              $30
            </Text>
            <Text style={{ fontWeight: '400' }}>/per month</Text>
          </Text>
        </View>
        <Switch
          style={styles.toggleSwitch}
          trackColor={{ false: '#F7F8F9', true: '#DB147F' }}
          thumbColor={'#ffff'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={specSwitch}
          value={isEnabledSpec}
        />
      </View>
      <View>
        <Modal visible={featModalVisible} transparent={true}>
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
        </Modal>
        <Modal visible={specModalVisible} transparent={true}>
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
        </Modal>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
   block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
  },
  header: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 24,
  },
  leftContent: {
    color: '#2D1F21',
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    backgroundColor: '#ffff',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  modalHeader: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 19.75,
    alignItems: 'center',
  },
  modalH: {
    paddingLeft: '30%',
  },
  modalTitle: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24,
    paddingVertical: 20,
  },
  modalText: {
    padding: 16,
    paddingBottom: 40,
  },
});
