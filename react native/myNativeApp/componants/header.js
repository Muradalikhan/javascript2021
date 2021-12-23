import React from 'react'
import { View,Text } from 'react-native'
import { styles } from '../style'

export default Header=()=> {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Todo App</Text>
        </View>
    )
}
