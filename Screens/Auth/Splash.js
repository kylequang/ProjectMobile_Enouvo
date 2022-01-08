import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/splash.png')}
        style={{ resizeMode: 'cover' }}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
