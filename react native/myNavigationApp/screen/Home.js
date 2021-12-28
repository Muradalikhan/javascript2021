import React from 'react'
import { Text, View,Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Home({navigation}) {

    const pressHandler=()=>{
        navigation.navigate('About')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text >Home Screen</Text>
        <Icon name="home" size={50} color="#900" />
        <Button title='go to About' onPress={pressHandler}/>
      </View>
    )
}
