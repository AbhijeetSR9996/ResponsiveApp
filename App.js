import React from 'react';
import { View, Text } from 'react-native';
import AuthStack from './src/Navigation/AuthStack';
import Routes from './src/Navigation/Routes';

const App = () => {
  return (
    <View style={{flex:1}}>
     <Routes/>
    </View>
  )
}

export default App;