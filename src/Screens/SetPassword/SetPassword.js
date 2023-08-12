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

const SetPassword = ({navigation}) => {
  const [isTrue, setTrue] = useState(false);
  const [isVisible, setVisible] = useState(true);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HeaderComp />

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          scrollsToTop>
          <Text style={styles.headingText}>Set Password</Text>
          <Text style={styles.descText}>
            Set a password for your new account{' '}
            <Text style={{fontWeight: 'bold'}}>(+33) 34 56 78 901</Text>
          </Text>
          <TextInputWithLabel
            label="Password"
            placeHolder="Enter your password"
            secureTextEntry={isVisible}
            rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
            onPressRight={() => setVisible(!isVisible)}
            inputStyle={{marginVertical: moderateVerticalScale(76)}}
          />

          <ButtonComp
            btnText={'Continue'}
            onPress={() => navigation.navigate(navigationStrings.SET_PASSWORD)}
            btnStyle={styles.btnStyle}
            img={imagePath.forwardIcon}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
export default SetPassword;
