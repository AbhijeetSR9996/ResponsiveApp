import {View, Text, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, Booking} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';

const BottomTab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.themeColor,
        tabBarInactiveTintColor: colors.blackOpacity50,
      }}>
      <BottomTab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  tintColor: focused
                    ? colors.themeColor
                    : colors.blackOpacity50,
                }}
                source={imagePath.homeIcon}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.BOOKING}
        component={Booking}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  tintColor: focused
                    ? colors.themeColor
                    : colors.blackOpacity50,
                  width: 30,
                  height: 30,
                }}
                source={imagePath.calendarIcon}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  tintColor: focused
                    ? colors.themeColor
                    : colors.blackOpacity50,
                }}
                source={imagePath.accountIcon}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
