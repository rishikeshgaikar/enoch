import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
//local imports
import R from '../R';

export const CButton = ({onPress, title, customStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonTouchableOpacity, customStyle]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonTouchableOpacity: {
    margin: '5%',
    paddingVertical: '3%',
    paddingHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: R.colors.primaryBrand,
  },
  buttonText: {
    color: R.colors.PrimaryWhite,
  },
});
