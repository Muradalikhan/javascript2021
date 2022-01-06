

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { styles } from './style'
import Task from './componants/Task'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';





export default App = () => {
  const [task, setTask] = useState()
  const [taskList, setTaskList] = useState([])


  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskList([...taskList, task])
    setTask('')
  }

  const deleteTask = (item) => {
    let copyOftaskList = [...taskList]
    copyOftaskList.splice(item, 1)
    setTaskList(copyOftaskList)
  }

  const deleteAllTask = () => {
    let copyOftaskList = [...taskList]
    copyOftaskList = []
    setTaskList(copyOftaskList)
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
              taskList.map((item, index) => {
                return <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>

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