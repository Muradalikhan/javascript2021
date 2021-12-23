

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

  let count = 10
  const updateUser = () => {
    setUserList((previousUser) => {

      return ([
        ...previousUser,
        { name: inputText, key: count + 1 }
      ])
    })

    setInputText('')
  }

  const deleteItem = (key) => {
    setUserList((items) => {
      return items.filter(user => user.key != key)
    })
  }


  return (
    <>

      <View style={styles.container}>

        <Header />
        <View style={styles.content}>
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
                <TouchableOpacity style={styles.box} onPress={() => deleteItem(item.key)}>
                  <Text style={styles.boxText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

      </View>

    </>
  )
}