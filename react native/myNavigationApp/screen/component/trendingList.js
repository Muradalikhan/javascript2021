
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import API_KEY from "../../config/config";


const TrendingList = ({ navigatation }) => {
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
       <View>
            {news.length === 0 ? (
                <ActivityIndicator color="black" size="large" />
            ) : (
                <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} style={{height:200}}>
                    {news.map((news, index) => (
                        <TouchableOpacity key={index} onPress={() => navigatation.navigate('WebView', {
                            url: news.url
                        })}>
                            <View style={{ margin: 10,flexDirection:'row' }}>
                                <Image
                                    source={{ uri: `${news.urlToImage}` }}
                                    style={{ height: 100, width: 100, borderRadius: 10 }}
                                />
                                <Text style={{ width: 100, textAlign: 'justify' }}>
                                    {news.title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            )}
        </View>
       
    )
}

export default TrendingList