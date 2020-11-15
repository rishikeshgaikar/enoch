import React from 'react';
import {View, StyleSheet} from 'react-native';
//local imports
import R from '../R';

export const Card = props => {
  return (
    <View style={[styles.card, props.customStyles]}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: '5%',
    marginVertical: '2%',
    padding: '2%',
    borderRadius: 8,
    elevation: 2,
    backgroundColor: R.colors.primaryWhite,
  },
});
