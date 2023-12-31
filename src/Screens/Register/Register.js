import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Register = ({navigation}) => {
  const [isTrue, setTrue] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HeaderComp />
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <TextInputWithLabel
              label="First Name"
              placeHolder="Please enter your first name"
              inputStyle={{flex: 1}}
            />
            <View style={{marginHorizontal: moderateScale(8)}} />
            <TextInputWithLabel
              label="Last Name"
              placeHolder="Please enter your last name"
              inputStyle={{flex: 1}}
            />
          </View>

          <TextInputWithLabel
            label="Salon Name"
            placeHolder="Please enter your salon name"
            inputStyle={{marginVertical: moderateVerticalScale(28)}}
          />

          <TextInputWithLabel
            label="Date of Birth"
            placeHolder="Please enter your dob"
          />

          <TextInputWithLabel
            label="Phone Number"
            placeHolder="Please enter your phone number"
            inputStyle={{marginVertical: moderateVerticalScale(28)}}
          />

          <TextInputWithLabel
            label="Email"
            placeHolder="Enter your email"
            inputStyle={{marginBottom: moderateVerticalScale(28)}}
            keyboardType="email-address"
          />

          <View style={{flexDirection: 'row'}}>
            <TextInputWithLabel
              label="Country"
              placeHolder="Please enter your country"
              inputStyle={{flex: 1}}
            />
            <View style={{marginHorizontal: moderateScale(8)}} />
            <TextInputWithLabel
              label="Postal/Zip Code"
              placeHolder="Please enter your Postal/Zip Code"
              inputStyle={{flex: 1}}
            />
          </View>

          <TextInputWithLabel
            label="Address"
            placeHolder="Please enter your address"
            inputStyle={{marginVertical: moderateVerticalScale(28)}}
          />

          <TextInputWithLabel
            label="Referral Code"
            placeHolder="Please enter your code"
          />

          <TouchableOpacity
            style={styles.bottomView}
            activeOpacity={0.8}
            onPress={() => setTrue(!isTrue)}>
            <Image
              source={isTrue ? imagePath.checkIcon : null}
              style={{marginRight: moderateScale(12), height: 30, width: 30}}
            />
            <Text>
              By Logging in, you agree to NOOVVOO's Privacy Policy and Terms of
              Use
            </Text>
          </TouchableOpacity>

          <ButtonComp
            btnText={'Continue'}
            onPress={() => navigation.navigate(navigationStrings.SET_PASSWORD)}
            btnStyle={{marginVertical: moderateVerticalScale(32)}}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Register;
