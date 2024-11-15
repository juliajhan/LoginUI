import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {

  const navigation = useNavigation()

  const handleRegister = () => {
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require("../assets/topVector.png")} style={styles.topImage}/>
      </View>
      <View style={styles.createAccountContainer}>
        <Text style={styles.createAccountText}>Create Account</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome 
          name={"user"} 
          size={24} 
          color={"#9A9A9A"} 
          style={styles.inputIcon}/>
        <TextInput style={styles.textInput} placeholder="Username" />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome 
          name={"lock"} 
          size={24} 
          color={"#9A9A9A"} 
          style={styles.inputIcon}/>
        <TextInput style={styles.textInput} placeholder="Password" secureTextEntry/>
      </View>
      <View style={styles.inputContainer}>
        <Fontisto 
          name={"email"} 
          size={24} 
          color={"#9A9A9A"} 
          style={styles.inputIcon}/>
        <TextInput style={styles.textInput} placeholder="Email"/>
      </View>
      <View style={styles.inputContainer}>
        <AntDesign 
          name={"mobile1"} 
          size={24} 
          color={"#9A9A9A"} 
          style={styles.inputIcon}/>
        <TextInput style={styles.textInput} placeholder="Mobile"/>
      </View>
      <View style={styles.createButtonContainer}>
        <Text style={styles.createText}>Create</Text>
        <AntDesign 
          name={"arrowright"} 
          size={30} 
          color={"#9A9A9A"} 
          style={styles.arrowIcon}/>
      </View>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.footerText}>Already have an account? {" "}
          <Text style={{textDecorationLine: "underline"}}>Sign in</Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.leftVectorContainer}>
        <ImageBackground source={require("../assets/leftVector.png")} style={styles.leftVectorImage}/>
      </View>
    </View>
  )
}

export default SignupScreen

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
    createAccountContainer: {
      marginBottom: 20,
    },
    createAccountText: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "500",
        color: "#262626",
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
    createButtonContainer: {
      flexDirection: "row",
      marginTop: 20,
      width: "90%",
      justifyContent: "flex-end",

    },
    createText: {
      color: "#262626",
      fontSize: 25,
      fontWeight: "bold",

    },
    arrowIcon: {
      marginLeft: 5,
      alignContent: "center",
      marginHorizontal: 10,
    },
    leftVectorContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
    },
    leftVectorImage: {
      height: 200,
      width: 150,
    },
    footerText: {
      color: "#262626",
      textAlign: "center",
      fontSize: 16,
      marginTop: 15,

    },
})