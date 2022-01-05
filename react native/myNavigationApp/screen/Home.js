import React, { useState,useEffect } from 'react'
import {
    ActivityIndicator,
    ScrollView,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import API_KEY from '../config/config';
import Catogories from './component/catagories'
import Trending from './component/trending'
// import TrendingList from './component/trendingList';

// import Icon from 'react-native-vector-icons/FontAwesome'
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

    return (
        <View style={{}}>

            <Catogories navigation={navigation} />

            <Trending  navigation={navigation}/>



              <View style={{ alignItems: 'center',height:250}}>
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
                                            source={{ uri: `${news.urlToImage}` }}
                                            style={{ height: 100, width: 100, borderRadius: 10 }}
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


















        </View>
    )
}
