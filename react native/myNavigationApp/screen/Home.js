import React, { useState, useEffect } from 'react'
import {
    ActivityIndicator,
    ScrollView,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import API_KEY from '../config/config';
import Catogories from './component/catagories'
import Trending from './component/trending'
// import TrendingList from './component/trendingList';

import Icon from 'react-native-vector-icons/MaterialIcons'
//import globleStyles from './globleStyles'




const deviceWidth = Dimensions.get('window').width;


export default function HomeScreen({ navigation }) {
    const [news, setNews] = useState([])

    const fetchDataFromApi = async () => {

        await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
            .then(res => res.json())
            .then(res => {
                setNews(res.articles)
            })
    }

    useEffect(() => {
        fetchDataFromApi()

    }, [])

    let arr=[]
    const saveNews = async (value) => {
        try {
           
            arr.push(value)
            await AsyncStorage.setItem('@storage_Key',JSON.stringify( arr))
            navigation.navigate('SavedNews')
          } catch (e) {
            // saving error
          }
       
      }

    return (
        <View style={{}}>

            <Catogories navigation={navigation} />

            <Trending navigation={navigation} />



            <View style={{ alignItems: 'center', height: 250 }}>
                {news.length === 0 ? (
                    <View
                        style={{
                            width: deviceWidth,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <ActivityIndicator color="black" size="large" />
                    </View>
                ) : (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {news.map((news, index) =>
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
                                                <TouchableOpacity onPress={()=>saveNews(news)}>
                                                    <Text> <Icon name="save" size={20} color="#900" /></Text>
                                                </TouchableOpacity>

                                            </View>
                                    </View>
                               
                            ) : null,
                        )}
                    </ScrollView>
                )}
            </View>


















        </View>
    )
}
