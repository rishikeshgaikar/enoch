import React from 'react';
import {View, Text, Button} from 'react-native';
//local imports
import R from '../R';

export const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: R.dimensions.hp('10%')}}>🤖</Text>
      <Text style={{fontSize: R.dimensions.hp('5%')}}>Welcome to enoch</Text>
      <Text style={{textAlign: 'center', marginVertical: '5%'}}>
        Best custom template solution for react-native that comes with all the
        necessary libraries required to get you started with your next project
        and reduce the initial library setup hell.
      </Text>
      <Button
        title={'Go to Details'}
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
