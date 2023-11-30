import { router } from 'expo-router';
import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image, TextInput } from 'react-native';
import LoginImg from '../assets/images/img1.png'
import Back from '../assets/images/back.png'

const SignIn = () => {
  return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => router.back()}>
          <Image source={Back} resizeMode='contain' />
          </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={LoginImg} resizeMode='contain' />
        <Text style={styles.logoText}>Sign Up</Text>
      </View>
      
      <View style={styles.textContainer}>
        <TextInput placeholder='Email' style={styles.input}/>
        <TextInput placeholder='Full Name' style={styles.input}/>
        <TextInput placeholder='Mobile' style={styles.input}/>
        <Text style={{alignSelf: 'flex-end', justifyContent: 'flex-start', fontSize: 12, fontWeight: '600'}}>By signing up, you’re agree to our Terms & Conditions and Privacy Policy.</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => router.push('/otp')}
            style={[styles.button, styles.btn1]}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>

        </View>
        <Text style={{marginTop: 25}}>Already have an acount? Login</Text>
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
      paddingBottom: 30,
    },
    logoText: {
      fontSize: 36,
      color: '#1D1C1A',
      fontWeight: '800',
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
      marginTop: 20,
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
        width: '100%',
        height: 56,
        borderRadius: 8,
        borderColor: '#1D1C1A80',
        borderWidth: 1,        paddingLeft: 20,
        color: '#1D1C1A50',
        marginBottom: 20,

    }
  });
  
export default SignIn