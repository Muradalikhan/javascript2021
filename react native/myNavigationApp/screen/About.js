import React from 'react'
import { Text, View,Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'





export default function About({navigation}) {
   
    // const {title}=route.params





    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Text>About</Text>
           <Icon name="wifi" size={50} color="#900" />

            {/* <Text>title : {JSON.stringify(title)}</Text> */}
          
           <Button title='go back' onPress={()=>navigation.goBack()} />
       </View>
    )
}
