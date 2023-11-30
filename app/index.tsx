import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Img from '../assets/images/first1.png';
import { useRouter } from 'expo-router';
import SegmentedControl from '../components/SegmentedControl';


const Hello = () => {
  const router = useRouter();
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (index: any) => {
    if(index === 0){
      router.push('/signup')
      setTabIndex(index);
    } else if ( index === 1){
      router.push('/login')
      setTabIndex(index);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Img} resizeMode='contain' />
        <Text style={styles.logoText}>dompet.</Text>
      </View>
      
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.headingText}>anytime and anywhere.</Text>
        <Text style={styles.subText}>Whenever and wherever you need it, dompet is here. Exchange money with a single click.</Text>
        <View style={styles.box}>
        <SegmentedControl
          containerMargin={16}
          segments={['Register', 'Sign In']}
          onChange={handleChange}
          currentIndex={tabIndex}
          segmentedControlWrapper={{backgroundColor: '#1D1C1A', borderRadius: 15, height: 50}}
          activeTextStyle={{color: '#fff'}}
          inactiveTextStyle={{color: '#fff'}}
          movingSegmentStyle={{backgroundColor: '#4a4a4a', borderRadius: 15}}
        />
      </View>
      </View>
    </View>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logoContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    color: '#1D1C1A',
    fontWeight: '800',
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
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
    marginTop: 50,
    flexDirection: 'row',
  },
  button: {
    borderRadius: 15,
    width: 190,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1: {
    backgroundColor: '#1D1C1A',
    zIndex: 2,
    right: -15,
  },
  btn2: {
    backgroundColor: '#4a4a4a',
    left: -15,
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
  box: {
    marginHorizontal: 16,
    marginVertical: 16,
    marginTop: 50,
  },
});

export default Hello;
