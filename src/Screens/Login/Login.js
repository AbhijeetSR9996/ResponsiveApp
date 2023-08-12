import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import {moderateVerticalScale} from 'react-native-size-matters';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';

const Login = ({navigation}) => {
  const [isVisible, setVisible] = useState(true);
  return (
    <View style={StyleSheet.container}>
      <ImageBackground
        // source={{
        //   uri: 'https://cdn.mos.cms.futurecdn.net/3qpVahdh69fiUrJdswtfUn.jpg',
        // }}
        source={imagePath.bg}
        style={styles.imgStyle}>
        <Text style={styles.loginTextStyle}>LOGIN</Text>
      </ImageBackground>
      <View style={styles.mainStyle}>
        <TextInputWithLabel
          label="Email Address"
          placeHolder="Enter your email"
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
          keyboardType="email-address"
        />
        <TextInputWithLabel
          label="Password"
          placeHolder="Enter your password"
          secureTextEntry={isVisible}
          rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
          onPressRight={() => setVisible(!isVisible)}
        />

        <TouchableOpacity
          style={styles.forgotView}
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate(navigationStrings.FORGOT_PASSWORD)
          }>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <ButtonComp btnText={'Login'} />

        <View style={styles.bottomView}>
          <Text>Not a member? </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(navigationStrings.CHOOSE_ACCOUNT)
            }>
            <Text>Join Now. </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
