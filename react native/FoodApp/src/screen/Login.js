import React from 'react'
import { View, Text,Button } from 'react-native'

const LoginScreen = ({ navigation }) => {


    const goToNext = () => {
        navigation.navigate('Home')
    }




    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button title='Go to Home' onClick={goToNext} />
        </View>
    )
}

export default LoginScreen