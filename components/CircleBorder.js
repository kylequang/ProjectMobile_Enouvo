import React from 'react';
import { View } from 'react-native';

const CircleBorder = ({ size, borderWidth, backgroundColor, children }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 0.5 * size,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth,
        backgroundColor,
        marginTop: -8,
      }}
    >
      {children}
    </View>
  );
};

export default CircleBorder;
