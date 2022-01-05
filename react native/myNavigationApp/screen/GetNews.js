import React, { useEffect,useState } from 'react'
import { View,Text,Image } from 'react-native'
import { ActivityIndicator,Dimensions,ScrollView,TouchableOpacity  } from 'react-native'
import API_KEY from '../config/config'



const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


const GetNews=({route,navigation})=>{
    const [news, setNews] = useState([])

    const recParamIs=route.params

    const fetchDataFromApi = async () => {

        await fetch(`https://newsapi.org/v2/top-headlines?category=${recParamIs}&country=us&apiKey=${API_KEY}`)
            .then(res => res.json())
            .then(res => {
                setNews(res.articles)
            })
    }

    useEffect(()=>{
        navigation.setOptions({
            title:recParamIs
        })

        fetchDataFromApi()

    },[])

    return(
        <View style={{alignItems: 'center'}}>
        {news.length === 0 ? (
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
            {news.map((news, index) =>
              news.urlToImage ? (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                   navigation.navigate('webViews',news.url)
                  }>
                  <View
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
                      source={{uri: `${news.urlToImage}`}}
                      style={{height: 100, width: 100, borderRadius: 10}}
                    />
                    <Text
                      style={{
                        width: deviceWidth - 130,
                        paddingLeft: 10,
                        paddingTop: 5,
                      }}>
                      {news.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : null,
            )}
          </ScrollView>
        )}
      </View>
    )
}

export default GetNews