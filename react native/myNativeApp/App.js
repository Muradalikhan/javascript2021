

import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { styles } from './style'
import Header from './componants/header'

const arr = [
  { name: 'murad', key: 1 },
  { name: 'ali', key: 2 },
  { name: 'khan', key: 3 },
  { name: 'jadoon', key: 4 },
  { name: 'zain', key: 5 },
  { name: 'haris', key: 6 },
]



export default App = () => {
  const [inputText, setInputText] = useState('')
  const [userList, setUserList] = useState(arr)


  const updateUser = () => {
    setUser(inputText)

    setInputText('')
  }

  return (
    <>

      <View style={styles.container}>

        <Header/>

        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#9a8c98"
            onChangeText={text => setInputText(text)}
            value={inputText}
          />
        </View>

        <TouchableOpacity onPress={updateUser}>
          <Text style={styles.btn}> +Add</Text>
        </TouchableOpacity>

        <View>
          <FlatList
            data={userList}
            renderItem={({ item }) => (
              <View style={styles.box}>
                <Text style={styles.boxText}>{item.name}</Text>
              </View>
            )}
          />
        </View>


      </View>

    </>
  )
}