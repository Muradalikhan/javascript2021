import React from 'react'
import {View,Text, Button} from 'react-native'

const aboutScreen=({navigation})=>{

const goToNext=()=>{
    navigation.navigate('Home')
}


  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>about Screen</Text>
      <Button title='LogOut' onClick={goToNext}/>
    </View>
  )
}

export default aboutScreen