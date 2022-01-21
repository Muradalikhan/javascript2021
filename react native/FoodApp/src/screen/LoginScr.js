import React from 'react'
import {View,Text, Button} from 'react-native'

const LoginScreen=({navigation})=>{

const goToNext=()=>{
    navigation.navigate('Home')
}


  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Home' onClick={goToNext}/>
    </View>
  )
}

export default LoginScreen