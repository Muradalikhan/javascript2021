

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { styles } from './style'
import Task from './componants/Task'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'






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

              <KeyboardAvoidingView
              behavior={Platform.OS==="ios"?'padding':'height'}
              style={styles.writeTaskWrapper}
              >
                <TextInput placeholder='Write Task...' style={styles.input} />

                <TouchableOpacity>
                  <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                  </View>
                </TouchableOpacity>
              </KeyboardAvoidingView>
        </View>

    </>
  )
}