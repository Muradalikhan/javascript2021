// In App.js in a new project

import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screen/Home';
import DetailsScreen from './screen/DetailsScreen';
import GetNews from './screen/GetNews';
import SavedNewsComp from './screen/component/savedNews';
import WebViewComp from './screen/component/webView';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="GetNews" component={GetNews} />
        <Stack.Screen name="SavedNews" component={SavedNewsComp} />
        <Stack.Screen name="webViews" component={WebViewComp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;