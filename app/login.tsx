import { router } from 'expo-router';
import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image, TextInput } from 'react-native';
import LoginImg from '../assets/images/login.png'
import Back from '../assets/images/back.png'
const SignIn = () => {
  return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => router.back()}>
          <Image source={Back} resizeMode='contain' />
          </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={LoginImg} resizeMode='contain' />
        <Text style={styles.logoText}>Login</Text>
      </View>
      
      <View style={styles.textContainer}>
        <TextInput placeholder='Enter Phone number, Email, Username' style={styles.input}/>
        <TextInput placeholder='Enter Password' style={styles.input}/>
        <Text style={{alignSelf: 'flex-end', justifyContent: 'flex-start', fontSize: 12, fontWeight: '600'}} onPress={() => router.push('/forgotPassword')}>Forgot password</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => router.push('/dashboard')}
            style={[styles.button, styles.btn1]}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('/dashboard')}
            style={[styles.button, styles.btn2]}
          >
            <Text style={[styles.buttonText, {color: '#000'}]}>Login with google</Text>
          </TouchableOpacity>
        </View>
        <Text style={{marginTop: 25}}>Doesn’t have an acount? <Text style={{color: 'blue'}} onPress={() => router.push('/signup')}>Register</Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingTop: '15%',
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 20,
    },
    logoText: {
      fontSize: 36,
      color: '#1D1C1A',
      fontWeight: '800',
    //   marginTop: 20,
    },
    textContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    headingText: {
      fontSize: 28,
      color: '#1D1C1A',
      fontWeight: '800',
      marginTop: 20,
      width: 190,
    },
    subText: {
      fontSize: 16,
      color: '#1D1C1A80',
      fontWeight: '400',
      marginTop: 20,
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      gap: 20,
    },
    button: {
      borderRadius: 15,
      width: 335,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn1: {
      backgroundColor: '#1D1C1A',
    },
    btn2: {
      backgroundColor: '#efefef',
      color: 'red'
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    activeButton1: {
      backgroundColor: '#1D1C1A',
    },
    activeButton2: {
      backgroundColor: '#4a4a4a',
    },
    input: {
        width: '96%',
        height: 56,
        borderRadius: 8,
        borderColor: '#1D1C1A80',
        borderWidth: 1,        paddingLeft: 20,
        color: '#1D1C1A',
        marginBottom: 20,

    }
  });
  
export default SignIn