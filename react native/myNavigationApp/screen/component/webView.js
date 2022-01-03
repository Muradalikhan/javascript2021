import React from 'react'
import { WebView } from 'react-native-webview'
const WebViewComp = ({ route }) => {

    return (
        <WebView source={{ uri: `${route.params.url}` }} />
    )
}

export default WebViewComp