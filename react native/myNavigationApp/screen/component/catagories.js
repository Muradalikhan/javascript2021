import React from "react"
import {StyleSheet, ScrollView, View,Text } from "react-native"


const catag=['Entertainment','Habits','Sports','Shows','Politics']

const Catogories=({navigation})=>{
    return(
        <>
        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
            {
                catag.map((item,index)=>{
                    return(
                        <View key={index} style={styles.catagoryWraper}>
                            <Text style={styles.catogryText}>{item}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
        </>
    )
}

export default Catogories


const styles=StyleSheet.create({
    catagoryWraper:{
        marginHorizontal:5,
        marginVertical:5,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'balck',
        borderRadius:10,
        padding:5,
    },
    catogryText:{
        fontSize:18,
    }
})