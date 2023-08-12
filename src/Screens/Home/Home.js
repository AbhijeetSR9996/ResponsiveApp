import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import dummyData from './dummyData';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import ButtonComp from '../../Components/ButtonComp';

const Home = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.flatStyle}>
        <View style={styles.flexView}>
          <View>
            <Text
              style={{
                fontSize: scale(12),
                color: colors.blackOpacity80,
              }}>
              {item?.date}
            </Text>
            <Text
              style={{
                fontSize: scale(14),
                color: colors.black,
                fontWeight: 'bold',
                marginTop: moderateVerticalScale(8),
              }}>
              {item?.name}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  width: moderateScale(14),
                  height: moderateScale(14),
                  tintColor: colors.blackOpacity50,
                }}
                source={imagePath.locationIcon}
              />
              <Text
                style={{
                  fontSize: scale(14),
                  color: colors.blackOpacity50,
                }}>
                {item?.address}
              </Text>
            </View>
          </View>

          <Image
            source={imagePath.profileIcon}
            style={{
              width: moderateScale(64),
              height: moderateScale(64),
              borderRadius: moderateScale(32),
            }}
          />
        </View>

        <View
          style={{
            ...styles.flexView,
            marginVertical: moderateVerticalScale(8),
          }}>
          <Text
            style={{
              fontSize: scale(14),
              color: colors.blackOpacity50,
              textTransform: 'uppercase',
            }}>
            Price{' '}
          </Text>
          <Text
            style={{
              fontSize: scale(14),
              color: colors.black,
              fontWeight: 'bold',
            }}>
            {item?.price}
          </Text>
        </View>

        <View style={styles.flexView}>
          <View style={{flex: 1}}>
            <ButtonComp
              btnText={'Reject'}
              btnStyle={{
                backgroundColor: colors.white,
                borderWidth: 1,
                borderColor: colors.themeColor,
              }}
              btnTextStyle={{color: colors.themeColor}}
            />
          </View>
          <View style={{marginHorizontal: moderateScale(8)}} />
          <View style={{flex: 1}}>
            <ButtonComp btnText={'Accept'} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
        <View style={styles.headerStyle}>
          <Text style={styles.headertextStyle}>Nanny Line</Text>
          <Image source={imagePath.notifyIcon} />
        </View>
        <View
          style={{
            marginTop: moderateVerticalScale(14),
            marginHorizontal: moderateScale(16),
            flex: 1,
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dummyData}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
              <View style={{marginBottom: moderateVerticalScale(16)}} />
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
