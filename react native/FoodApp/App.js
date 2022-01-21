// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/Home';
import LoginScreen from './src/screen/LoginScr';
import aboutScreen from './src/screen/About';
// import SingUpScreen from './src/screen/signup';





const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="login" component={LoginScreen} /> */}
        <Stack.Screen name="about" component={aboutScreen} />
        {/* <Stack.Screen name="signup" component={SingUpScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;