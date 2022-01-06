// In App.js in a new project

import * as React from 'react';
import {View,Text} from 'react-native'
import Styles from './src/config/globleStyle';

function App() {
  return (
  <View style={Styles.bg}>
    <Text style={Styles.h1}>Food App</Text>
  </View>
  );
}

export default App;