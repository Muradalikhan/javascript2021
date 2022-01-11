import React from 'react';
import MapView, { PROVIDER_GOOGLE,Marker  } from 'react-native-maps'; 
import { StyleSheet,View } from 'react-native';


const MyMaps=() => (
   <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} 
       style={styles.map}
       region={{
         latitude: 24.7986,
         longitude: 67.0433486,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
         <Marker title='Coffee' description='coffee wagera' coordinate={{latitude:24.7981301,longitude:67.0445448}} />
         <Marker image={{uri:'http://assets.stickpng.com/thumbs/588891ecbc2fc2ef3a1860a4.png'}} title='Happy' description='happy donut dha' coordinate={{latitude:24.7992667,longitude:67.0472205}} />
    
    
     </MapView>
   </View>
);

export default MyMaps

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
   