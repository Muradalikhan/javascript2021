import React from 'react'
import { Text, View,Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Feather'


export default function About({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Text>About</Text>
           <Icon name="wifi" size={50} color="#900" />
           <Icon1 name="crosshair" size={50} color="#900" />
           <Button title='go back' onPress={()=>navigation.goBack()} />
       </View>
    )
}
