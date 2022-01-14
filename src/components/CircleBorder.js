import React from 'react';
import { View, StyleSheet } from 'react-native';

const CircleBorder = ({
  size,
  borderWidth,
  backgroundColor,
  marginTop,
  children,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: 0.5 * size,
          borderWidth,
          backgroundColor,
          marginTop,
        },
      ]}
      key={children}
    >
      {children}
    </View>
  );
};

export default CircleBorder;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
  },
});
