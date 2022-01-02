import React, { useState } from 'react'
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'

export default function Home({ navigation }) {

    const [deals, setDeals] = useState([
        { title: 'burger', price: '100', drink: 'pepsi' },
        { title: 'club sandwitch', price: '200', drink: 'pepsi' },
        { title: 'zinger', price: '300', drink: 'pepsi' },
    ])


    // const pressHandler=()=>{
    //     navigation.navigate('About')
    // }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text >Home Screen</Text>
            <FlatList
                data={deals}
                renderItem={({ item }) => {
                    <TouchableOpacity>
                        <Text>{item.title}</Text>
                        <Button title='View Details' onPress={() => {
                            navigation.navigate('About', item)
                        }} />
                    </TouchableOpacity>
                }}
            />
        </View>
    )
}
