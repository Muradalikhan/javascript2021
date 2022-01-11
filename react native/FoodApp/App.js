// In App.js in a new project

import * as React from 'react';
import {View,Text} from 'react-native'
import Styles from './src/config/globleStyle';
import MyMaps from './src/component/maps'
import MylocalStorage from './src/component/asyncStorageCard';

function App() {
  return (
  <View style={Styles.bg}>
    <Text style={Styles.h1}>Food App</Text>
    <Text>choose yourlocation on Map</Text>

    <View>
      {/* <MyMaps/> */}

      <MylocalStorage/>
    </View>
  </View>
  );
}

export default App;