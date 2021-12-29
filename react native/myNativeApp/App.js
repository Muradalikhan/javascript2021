

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { styles } from './style'
import Task from './componants/Task'






export default App = () => {

  return (
    <>
        <View style={styles.container}>
              <View style={styles.taskWraper}>
                  <Text style={styles.sectionTitle}>Today's task</Text>

                  <View style={styles.items}>
                    <Task text={'Task 1'}/>
                    <Task text={'Task 2'}/>
                  </View>
              </View>
        </View>

    </>
  )
}