// In App.js in a new project

import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/Home';
import DetailsScreen from './screen/DetailsScreen';
import GetNews from './screen/GetNews';
import SavedNewsComp from './screen/component/savedNews';
import WebViewComp from './screen/component/webView';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const stackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="GetNews" component={GetNews} />
      {/* <Stack.Screen name="SavedNews" component={SavedNewsComp} /> */}
      <Stack.Screen name="webViews" component={WebViewComp} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Homes" component={stackScreens} />
        <Tab.Screen name="SavedNews" component={SavedNewsComp} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}

export default App;