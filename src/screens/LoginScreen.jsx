import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

  const navigation = useNavigation()

  const handleRegister = () => {
    navigation.navigate("Signup")
  }

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require("../assets/topVector.png")} style={styles.topImage}/>
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Hello</Text>
      </View>
      <View>
        <Text style={styles.signInText}>Sign in to your account</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome 
          name={"user"} 
          size={24} 
          color={"#9A9A9A"} 
          style={styles.inputIcon}/>
        <TextInput style={styles.textInput} placeholder="Email" />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome 
          name={"lock"} 
          size={24} 
          color={"#9A9A9A"} 
          style={styles.inputIcon}/>
        <TextInput style={styles.textInput} placeholder="Password" secureTextEntry/>
      </View>
      <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      <View style={styles.signInButtonContainer}>
        <Text style={styles.signIn}>Sign in</Text>
        <AntDesign 
          name={"arrowright"} 
          size={30} 
          color={"#9A9A9A"} 
          style={styles.arrowIcon}/>
      </View>
      <TouchableOpacity onPress={handleRegister}>
      <Text style={styles.footerText}>Don't have an account?{" "}
        <Text style={{textDecorationLine: "underline"}}>Register</Text>
      </Text>
      </TouchableOpacity>
      <View style={styles.leftVectorContainer}>
        <ImageBackground source={require("../assets/leftVector.png")} style={styles.leftVectorImage}/>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
        flex: 1,
        position: "relative",

    },
    topImageContainer: {
        
    },
    topImage: {
        width:"100%",
        height: 130,
    },
    helloContainer: {
      marginBottom: 20,
    },
    helloText: {
        fontSize: 70,
        textAlign: "center",
        fontWeight: "500",
        color: "#262626",
    },
    signInText: {
        fontSize: 18,
        textAlign: "center",
        color: "#262626",
        marginBottom: 30,
        
    },
    inputContainer: {
      backgroundColor: "#FFFFFF",
      flexDirection: "row",
      borderRadius: 20,
      marginHorizontal: 40,
      alignItems: "center",
      height: 50,
      marginVertical: 20,

      /** for android shadow */
      elevation: 10,

      /** for ios shadow */
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      
    },
    inputIcon: {
      marginLeft: 15,
      marginRight: 10,
    },
    textInput: {
      flex: 1,
    },
    forgotPasswordText: {
      color: "#BEBEBE",
      textAlign: "right",
      width: "90%",
      fontSize: 15,
    },
    signInButtonContainer: {
      flexDirection: "row",
      marginTop: 30,
      width: "90%",
      justifyContent: "flex-end",

    },
    signIn: {
      color: "#262626",
      fontSize: 25,
      fontWeight: "bold",

    },
    arrowIcon: {
      marginLeft: 5,
      alignContent: "center",
      marginHorizontal: 10,
    },
    footerText: {
      color: "#262626",
      textAlign: "center",
      fontSize: 16,
      marginTop: 70,

    },
    leftVectorContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
    },
    leftVectorImage: {
      height: 200,
      width: 150,
    }
})