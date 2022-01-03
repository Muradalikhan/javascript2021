import React from "react";
import img from "./asset/img1.png"
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  loginHeader: {
    marginVertical: 10,
    fontSize: 28,
    color: '#ff5400',
    fontWeight: 'bold',
  },
  inputView: {
    width: "80%",
    backgroundColor: "#e5e5e5",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
    fontSize: 16,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#ff5400",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: 'white',
    fontSize: 16
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: "center",
    alignItems: "center",


  },


});








export default LoginScreen = () => {



  return (
    <>

      <View style={styles.container}>
        <ImageBackground source={img} style={styles.image} resizeMode="cover">
          <Text style={styles.loginHeader}>Welcome!</Text>

          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              placeholderTextColor="#9a8c98"
            // onChangeText={text => this.setState({ email: text })} 
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              secureTextEntry={true}
              placeholder="Password..."
              placeholderTextColor="#9a8c98"
            // onChangeText={text => this.setState({ email: text })} 
            />
          </View>

          <View>
            <Text style={{color:'white'}}>forgot password?</Text>
          </View>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          
          <View>
            <Text style={{color:'white'}}>Don't have account? <Text style={{color:'#ff5400',fontWeight:'bold'}}>Sign Up</Text> </Text>
          </View>
        </ImageBackground>
      </View>

    </>
  )
}