import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Keyboard,
} from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';

const ForgotPassword = ({navigation}) => {
  // const [keyboardHeight, setKeyboardHeight] = useState(0);
  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     'keyboardDidShow',
  //     event => {
  //       console.log('event trigger on show keyboard', event);
  //       setKeyboardHeight(event.endCoordinates.height - 280);
  //     },
  //   );
  //   const keyboardDidHideListener = Keyboard.addListener(
  //     'keyboardDidHide',
  //     event => {
  //       console.log('event trigger on hide keyboard', event);
  //       setKeyboardHeight(0);
  //     },
  //   );
  //   return () => {
  //     keyboardDidShowListener.remove();
  //     keyboardDidHideListener.remove();
  //   };
  // }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HeaderComp />

        <View style={{flex: 1}}>
          <View
            style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={imagePath.lockIcon} />
          </View>

          <View style={{flex: 0.4}}>
            <Text style={styles.headingText}>Forgot Password</Text>
            <Text style={styles.descText}>
              Enter the email address associated with your account.
            </Text>
          </View>

          {/* <View style={{flex: 0.4, marginBottom: keyboardHeight}}> */}
          <View style={{flex: 0.4}}>
            <TextInputWithLabel
              label="Email"
              placeHolder="Enter your email"
              inputStyle={{marginBottom: moderateVerticalScale(28)}}
              keyboardType="email-address"
            />
            <ButtonComp
              btnText={'Send'}
              onPress={() =>
                navigation.navigate(navigationStrings.SET_PASSWORD)
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ForgotPassword;
