import React, {useState} from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
//local imports
import R from '../R';

export const CTextInput = props => {
  const [IsFocus, setIsFocus] = useState(false);
  const [HidePassword, setHidePassword] = useState(true);

  const handleOnFocus = () => {
    setIsFocus(true);
  };
  const handleOnBlur = () => {
    setIsFocus(false);
  };
  return (
    <View>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        ref={props.ref}
        onEndEditing={props.onEndEditing}
        autoFocus={props.autoFocus}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        editable={props.editable}
        underlineColorAndroid={
          IsFocus
            ? R.colors.primaryBrand
            : props.showErrorText
            ? R.colors.primaryRed
            : R.colors.primaryBlack
        }
        secureTextEntry={props.secureTextEntry ? HidePassword : false}
      />
      {props.secureTextEntry ? (
        <View style={styles.secureTextEntry}>
          <FeatherIcon
            name={HidePassword ? 'eye-off' : 'eye'}
            size={R.dimensions.hp('2.6%')}
            onPress={() => setHidePassword(!HidePassword)}
            style={{paddingHorizontal: '2%'}}
          />
        </View>
      ) : null}
      {props.showErrorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '3%',
  },
  errorText: {
    marginHorizontal: '7%',
    color: R.colors.primaryRed,
  },
  secureTextEntry: {
    position: 'absolute',
    right: '5%',
    bottom: 14,
    backgroundColor: R.colors.PrimaryWhite,
    justifyContent: 'center',
  },
});
