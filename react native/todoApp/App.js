

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native'
import { styles } from './style'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';





export default App = () => {
  const [task, setTask] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [completeMode, setCompleteMode] = useState(false)
  const [index, setIndex] = useState('')
  const [taskList, setTaskList] = useState([])


  const handleAddTask = () => {
    if (editMode) {
      taskList[index] = task
      setIndex(null)
      setTask('')
      setEditMode(false)
      Keyboard.dismiss()
    } else {
      if (task.length > 0) {
        Keyboard.dismiss()
        setTaskList([...taskList, task])
        setTask('')
      }
      else {
        Alert.alert('Oops!', 'Empty task not allowed', [
          { text: 'close', onPress: () => console.log('close') }
        ])
      }

    }
  }

  const editTask = (selectedItem, textToEdited) => {
    setEditMode(true)
    setIndex(selectedItem)
    setTask(textToEdited)
  }

  const deleteTask = (selectedItem) => {
    let copyOftaskList = [...taskList]
    copyOftaskList.splice(selectedItem, 1)
    setTaskList(copyOftaskList)
  }


  const deleteAllTask = () => {
    let copyOftaskList = [...taskList]
    copyOftaskList = []
    setTaskList(copyOftaskList)
  }

  const completeTask = (selectedItem) => {
    console.log(selectedItem)
    taskList.filter((item,ind)=>{
      if (selectedItem===ind) {
        return setCompleteMode(!completeMode)
      }
    })
    
  }




  return (
    <>
      <View style={styles.container}>
        <View style={styles.taskWraper}>
          <View style={styles.header}>
            <Text style={styles.sectionTitle}>Today's task </Text>
            <TouchableOpacity onPress={deleteAllTask}>
              <Text><Icon name="delete" size={30} color="#c1121f" /></Text>
            </TouchableOpacity>
          </View>

          <View style={styles.items}>
            {taskList.length !== 0 ?
              taskList.map((val, index) => {
                return (

                  <View key={index} style={styles.item}>
                    <View style={styles.leftItem}>
                      <TouchableOpacity onPress={() => completeTask(index)}>
                        <View style={!completeMode ? styles.square : styles.square2}></View>
                      </TouchableOpacity>
                      <Text style={styles.itemText}>{val}</Text>
                    </View>
                    <View style={styles.iconWrapper}>
                      <TouchableOpacity onPress={() => deleteTask(index)}>
                        <Text><Icon name="delete" size={30} color="#c1121f" /></Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => editTask(index, val)}>
                        <Text><Icon name="edit" size={30} color="green" /></Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                )
              })
              :
              <View style={styles.NoTaskWraper}>
                <Text style={styles.NoTaskText}>No Task Yet</Text>
                <Text ><Icon1 name='social-dropbox' size={30} color='lightgrey' /> </Text>
              </View>

            }
          </View>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}
        >
          <TextInput placeholder='Write Task...' style={styles.input} value={task} onChangeText={text => setTask(text)} />

          <TouchableOpacity onPress={handleAddTask}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>

    </>
  )
}