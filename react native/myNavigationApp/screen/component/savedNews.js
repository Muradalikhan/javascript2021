import React, { useEffect, useState } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { ActivityIndicator, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/MaterialIcons'







const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;




const SavedNewsComp = ({ route, navigation }) => {

  const [savedNews, setSavedNews] = useState([])



  const displayData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return (jsonValue != null ? setSavedNews(JSON.parse(jsonValue)) : null);

    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    navigation.setOptions({
      title: 'Saved News'
    })

    displayData()

  }, [])


  const deleteNews = async (selectedItem) => {
    // setSavedNews(savedNews.filter((item, ind) => {
    //   return (selectedItem !== ind ? item : '')
    // }))


    try {
      let data = await AsyncStorage.getItem('@storage_Key');
      let dataArray = JSON.parse(data);
      const alteredNews = dataArray.filter((e, ind) => ind !== selectedItem ? e : null)
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(alteredNews));
      setSavedNews(alteredNews)
    }
    catch (error) {
      console.log(error)
    }

  }


  return (

    <View style={{ alignItems: 'center' }}>
      {savedNews.length === 0 ? (
        <ActivityIndicator
          style={{
            height: deviceHeight,
            width: deviceWidth,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          size="large"
          color="black"
        />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {savedNews.map((news, index) =>
            news.urlToImage ? (

              <View
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  borderRadius: 10,
                  elevation: 4,
                  width: deviceWidth - 30,
                  marginVertical: 7,
                }}>
                <Image
                  source={{ uri: `${news.urlToImage}` }}
                  style={{ height: 100, width: 100, borderRadius: 10 }}
                />
                <Text
                  style={{
                    width: deviceWidth - 160,
                    paddingLeft: 10,
                    paddingTop: 5,
                  }}>
                  {news.title}
                </Text>
                <View style={{ justifyContent: 'space-around' }}>
                  <TouchableOpacity onPress={() => navigation.navigate('webViews', news.url)}>
                    <Text> <Icon name="remove-red-eye" size={20} color="#900" /></Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteNews(index)}>
                    <Text> <Icon name="delete" size={20} color="#900" /></Text>
                  </TouchableOpacity>

                </View>
              </View>

            ) : null,
          )}
        </ScrollView>
      )}
    </View>
  )
}

export default SavedNewsComp