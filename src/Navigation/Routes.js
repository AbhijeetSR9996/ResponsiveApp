import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

export default function Routes() {
  return (
    <NavigationContainer>
      {/* false for Login/AuthStack */}
      {false ? HomeStack() : AuthStack()}
    </NavigationContainer>
  );
}
