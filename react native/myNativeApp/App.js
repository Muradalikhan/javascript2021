

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { styles } from './style'
import Task from './componants/Task'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'






export default App = () => {
  const [task, setTask] = useState()
  const [taskList, setTaskList] = useState([])


  const handleAddTask=()=>{
    Keyboard.dismiss()
    setTaskList([...taskList,task])
    setTask('')
  }


  return (
    <>
      <View style={styles.container}>
        <View style={styles.taskWraper}>
          <Text style={styles.sectionTitle}>Today's task</Text>

          <View style={styles.items}>
           {
             taskList.map((item,index)=>{
               return <Task key={index} text={item}/>
             })
           }
          </View>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}
        >
          <TextInput placeholder='Write Task...' style={styles.input} value={task} onChangeText={text=>setTask(text)} />

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