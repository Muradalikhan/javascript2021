
import React from "react";
import { View, Text } from 'react-native';
import { WebView } from "react-native-webview";


const WebViewComp = ({ route, navigatation }) => {

    console.log(route.params)

    return (

        <WebView source={{ uri: `${route.params}` }} />
 

    )
}

export default WebViewComp