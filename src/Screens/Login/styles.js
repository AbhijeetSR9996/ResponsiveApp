import {StyleSheet} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgStyle: {
    height: moderateScale(200),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTextStyle: {
    fontSize: scale(32),
    color: 'white',
    fontWeight: 'bold',
  },
  mainStyle: {
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateVerticalScale(44),
  },
  forgotView: {
    alignSelf: 'flex-end',
    marginVertical: moderateVerticalScale(24),
  },
  forgotText: {
    fontSize: scale(16),
    color: colors.themeColor,
    fontWeight: '400',
  },
  bottomView: {
    flexDirection: 'row',
    marginTop: moderateVerticalScale(72),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
