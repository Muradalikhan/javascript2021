import React from 'react'
import { Text, View,Button } from 'react-native'

export default function About({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Text>About</Text>
           <Button title='go back' onPress={()=>navigation.goBack()} />
       </View>
    )
}
