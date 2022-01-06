import React from 'react'
import { View, Text, Button } from 'react-native'

const SingUpScreen = ({ navigation }) => {

    const goToNext = () => {
        navigation.navigate('Login')
    }



    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SingUpScreen </Text>
            <Button title='Go to Login' onClick={goToNext} />
        </View>
    )
}

export default SingUpScreen