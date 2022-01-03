import React from 'react'
import { Text, View, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'





export default function DetailsScreen({ route, navigation }) {

    // const {title}=route.params


    const { title, price,drink } = route.params;


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>title: {JSON.stringify(title)}</Text>
            <Text>price: {JSON.stringify(price)}</Text>
            <Text>drink: {JSON.stringify(drink)}</Text>
           
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}
