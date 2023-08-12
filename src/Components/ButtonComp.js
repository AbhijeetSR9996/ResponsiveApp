import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import colors from '../styles/colors';

const ButtonComp = ({
  btnText,
  btnStyle = {},
  onPress = () => {},
  img,
  btnTextStyle = {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{...styles.btnStyle, ...btnStyle}}>
      {!!img ? (
        <Image source={img} style={{tintColor: colors.white}} />
      ) : (
        <Text style={{...styles.btnTextStyle, ...btnTextStyle}}>{btnText}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  btnStyle: {
    height: moderateScale(48),
    backgroundColor: colors.themeColor,
    borderRadius: moderateScale(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontSize: scale(12),
    color: colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
