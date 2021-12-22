

import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'



const styles = StyleSheet.create({

  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItem: 'center',
    backgroundColor: '#3c6e71',
    color: 'white',
    fontSize: 16,
  },
  heading: {
    fontSize: 36,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: 20


  },
  boxContainer: {
    display: 'flex',
    padding: 20,

    // flexDirection: 'row',
  },
  box: {
    width: '100%',
    height: 100,
    backgroundColor: '#9a8c98',
    marginVertical: 20,

  },
  boxText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
  }



})




export default App = () => {
  const arr = [
    { name: 'kashif', age: '12' },
    { name: 'Usman', age: '22' },
    { name: 'hanif', age: '23' },
    { name: 'raheel', age: '24' },
    { name: 'imran', age: '25' },
    { name: 'sameer', age: '25' },
  ]

  return (
    <>

      <View style={styles.container}>

        <View>
          <Text style={styles.heading}>Hello! User</Text>
        </View>

        <View style={styles.boxContainer}>
          <ScrollView>
            {
              arr.map((item,index) => {
                return (
                  <View style={styles.box} key={index}><Text style={styles.boxText}>{item.name}</Text></View>
                )
              })
            }


          </ScrollView>

        </View>

      </View>

    </>
  )
}