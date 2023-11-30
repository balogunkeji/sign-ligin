import { router } from "expo-router";
import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import LoginImg from "../assets/images/reset.png";
import Back from "../assets/images/back.png";

const ResetPassword = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Image source={Back} resizeMode='contain' />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={LoginImg} resizeMode='contain' />
        <Text style={styles.logoText}>Reset password?</Text>
        <Text
          style={{
            fontSize: 12,
            textAlign: "center",
            width: 341,
            marginTop: 20,
          }}
        >
          Don’t worry! it happens. Please enter the address associated with your
          account.
        </Text>
      </View>

      <View style={styles.textContainer}>
        <TextInput placeholder='New Password' style={styles.input} />
        <TextInput placeholder='Confirm Password' style={styles.input} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => router.push("/otp")}
            style={[styles.button, styles.btn1]}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ marginTop: 20 }}>Need help?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '15%',
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
    paddingTop: 50,
  },
  logoText: {
    fontSize: 36,
    color: "#1D1C1A",
    fontWeight: "800",
    //   marginTop: 20,
  },
  textContainer: {
    //   flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    fontSize: 28,
    color: "#1D1C1A",
    fontWeight: "800",
    marginTop: 20,
    width: 190,
  },
  subText: {
    fontSize: 16,
    color: "#1D1C1A80",
    fontWeight: "400",
    marginTop: 20,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    gap: 20,
  },
  button: {
    borderRadius: 15,
    width: 335,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btn1: {
    backgroundColor: "#1D1C1A",
  },
  btn2: {
    backgroundColor: "#efefef",
    color: "red",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  activeButton1: {
    backgroundColor: "#1D1C1A",
  },
  activeButton2: {
    backgroundColor: "#4a4a4a",
  },
  input: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    borderColor: "#1D1C1A80",
    borderWidth: 1,
    paddingLeft: 20,
    color: "#1D1C1A50",
    marginBottom: 20,
  },
});

export default ResetPassword;
