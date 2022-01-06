import React from 'react'
import {View,Text, Button} from 'react-native'

const HomeScreen=({navigation})=>{

const goToNext=()=>{
    navigation.navigate('Login')
}


  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='LogOut' onClick={goToNext}/>
    </View>
  )
}

export default HomeScreen