import React from 'react';
import {View, Text, Button} from 'react-native';
//local imports
import R from '../R';

export const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: R.dimensions.hp('10%')}}>🤖</Text>
      <Text
        style={{
          fontSize: R.dimensions.hp('5%'),
          marginVertical: R.dimensions.hp('5%'),
        }}>
        Welcome to enoch
      </Text>
      <Button
        title={'Go to Details'}
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
