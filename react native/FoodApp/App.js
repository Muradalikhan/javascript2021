// In App.js in a new project

import * as React from 'react';
import {View,Text} from 'react-native'
import MyCard from './src/component/card';
import Styles from './src/config/globleStyle';

function App() {
  return (
  <View style={Styles.bg}>
    <Text style={Styles.h1}>Food App</Text>

    <MyCard/>
  </View>
  );
}

export default App;