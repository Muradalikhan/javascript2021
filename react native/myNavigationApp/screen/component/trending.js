
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import API_KEY from "../../config/config";


const Trending = ({ navigatation }) => {
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
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {news.map((news, index) => (
                        <TouchableOpacity key={index} onPress={() => navigatation.navigate('WebView', {
                            url: news.url
                        })}>
                            <View style={{ margin: 10 }}>
                                <Image
                                    source={{ uri: `${news.urlToImage}` }}
                                    style={{ height: 200, width: 200, borderRadius: 10 }}
                                />
                                <Text style={{ width: 200, textAlign: 'justify' }}>
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

export default Trending