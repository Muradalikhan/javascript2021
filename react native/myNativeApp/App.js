

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
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
  const addTodo = () => {
    if (inputText.length > 3) {
      setUserList((previousUser) => {
        return ([
          ...previousUser,
          { name: inputText, key: count + 1 }
        ])
      })

      setInputText('')
    } else {
      Alert.alert('Ooops!', 'char should be larger than 3', [
        { text: 'close', onPress: () => console.log('close') }
      ])
    }

  }

  const deleteItem = (key) => {
    setUserList((items) => {
      return items.filter(user => user.key != key)
    })
  }

  const deleteAll = () => {
    setUserList([])
  }


  return (
    <>
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
      }}>
        <View style={styles.container}>

          <Header />
          <View style={styles.form}>
            <View style={styles.inputView} >
              <TextInput
                style={styles.inputText}
                placeholder="write todo..."
                placeholderTextColor="#9a8c98"
                onChangeText={text => setInputText(text)}
                value={inputText}
              />
            </View>

            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={addTodo}>
                <Text style={styles.btn} > +Add</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={deleteAll}>
                <Text style={styles.btn}> DeleteAll</Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.content}>
            <View>
              <FlatList
                data={userList}
                horizontal={false}
                numColumns={2}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.box} onPress={() => deleteItem(item.key)}>
                    <Text style={styles.boxText}>{item.name}</Text>

                  </TouchableOpacity>
                )}
              />
            </View>
          </View>

        </View>
      </TouchableWithoutFeedback>

    </>
  )
}