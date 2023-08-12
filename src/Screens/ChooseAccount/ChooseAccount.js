import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';

const ChooseAccount = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, marginBottom: verticalScale(10)}}>
      <View
        style={{
          paddingHorizontal: moderateScale(24),
        }}>
        <HeaderComp />
      </View>

      <View style={styles.container}>
        <Text style={styles.headingText}>Choose your account type</Text>

        <View style={{alignItems: 'center'}}>
          <Image source={imagePath.home} style={styles.imgStyle} />
          <Text style={styles.textStyle}>Agency</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Image source={imagePath.profileIcon} style={styles.imgStyle} />
          <Text style={styles.textStyle}>Freelancer</Text>
        </View>

        <ButtonComp
          btnText={'Continue'}
          btnStyle={{width: '100%'}}
          onPress={() => navigation.navigate(navigationStrings.REGISTER)}
        />
      </View>
    </SafeAreaView>
  );
};
export default ChooseAccount;
