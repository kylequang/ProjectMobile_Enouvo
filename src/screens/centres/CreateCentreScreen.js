import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { createCentre } from '../../services/putData'
const CreateCentreScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const createNewCentre = () => {
    createCentre(name, img)
    setTimeout(() => {
      Alert.alert('You added new centre successfully')
    }, 5000)
    setName('')
    setImg('')
    navigation.navigate('Centre')
  }
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.text}>Centre Name</Text>
        <TextInput
          placeholder="Enter Centre name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.text}>Centre Image</Text>
        <TextInput
          placeholder="Enter Centre Image"
          value={img}
          onChangeText={(text) => setImg(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={createNewCentre} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CreateCentreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  text: {
    color: '#00008B',
    fontWeight: '400',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#DB147F',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
