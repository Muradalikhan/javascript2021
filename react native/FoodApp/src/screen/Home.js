import React from 'react'
import {View,Text, Button} from 'react-native'

const HomeScreen=({navigation})=>{

const goToNext=()=>{
    navigation.navigate('about')
}


  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='About' onClick={goToNext}/>
    </View>
  )
}

export default HomeScreen