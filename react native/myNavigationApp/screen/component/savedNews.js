import React, { useEffect,useState } from 'react'
import { View,Text,Image } from 'react-native'
import { ActivityIndicator,Dimensions,ScrollView,TouchableOpacity  } from 'react-native'





const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;




const SavedNewsComp = ({ route,navigation }) => {

    const [savedNews, setSavedNews] = useState([])

    
    useEffect(()=>{
        navigation.setOptions({
            title:'Saved News'
        })
        setSavedNews([
            ...savedNews,
            route.params
        ])
    },[])
    return (
        <View style={{alignItems: 'center'}}>
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
                <TouchableOpacity
                  key={index}
                  onPress={() =>{}}>
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

export default SavedNewsComp