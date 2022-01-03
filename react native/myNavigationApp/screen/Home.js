import React, { useState } from 'react'
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import Catogories from './component/catagories'
import Trending from './component/trending'
// import Icon from 'react-native-vector-icons/FontAwesome'
import globleStyles from './globleStyles'

export default function HomeScreen({ navigation }) {

    const [deals, setDeals] = useState([
        { title: 'burger', price: '100', drink: 'pepsi' },
        { title: 'club sandwitch', price: '200', drink: 'pepsi' },
        { title: 'zinger', price: '300', drink: 'pepsi' },
    ])


    // const pressHandler = () => {
    //     navigation.navigate('Details')
    // }



    return (
        <View>

            <Catogories navigation={navigation}/>

            <Trending/>






















            {/* <Text style={globleStyles.subHeader}>Menu</Text> */}
            {/* <Button title='go to Details' onPress={pressHandler} /> */}

            {/* {
                deals.map((item, index) => {
                    return (
                        <View key={index} style={globleStyles.itemWrapper}>
                            <Text style={globleStyles.item}>{item.title}</Text>
                            <Button
                                title="Go to Details"
                                onPress={() => { navigation.navigate('Details', item) }}
                            />
                        </View>
                    )
                })
            } */}

        </View>
    )
}
