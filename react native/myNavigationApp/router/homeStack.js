
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import About from '../screen/DetailsScreen';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();


const NavigationApp = () => {

  return (
    <>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
       screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen name="Home" component={Home}    
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default NavigationApp;
