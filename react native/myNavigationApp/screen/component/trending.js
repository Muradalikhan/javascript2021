
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import API_KEY from "../../config/config";


const Trending = () => {
    const [news, setNews] = useState([])



    const fetchDataFromApi = async () => {

        await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
            .then(res => res.json())
            .then(res => {
                setNews(res.articles)
            })
        console.log(news.length)
    }

    useEffect(() => {
        fetchDataFromApi()

    }, [])



    return (
        <>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {
                    news.map((item, index) => {
                        return (
                            <View key={index} style={{margin:10}}>
                                <Image
                                    source={{uri:`${item.urlToImage} `}}
                                    style={{ width:200,height:200,borderRadius:10}} />
                                <Text style={{width:200,textAlign:'justify'}}>{item.title}</Text>
                            </View>
                        )
                    })
                }



            </ScrollView>
        </>
    )
}

export default Trending