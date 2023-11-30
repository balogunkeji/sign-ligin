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
import LoginImg from "../assets/images/otp.png";
import { OTPInput } from "../components/otp";
import Back from "../assets/images/back.png";

const Otp = () => {
  const [pin, setPin] = React.useState("");
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Image source={Back} resizeMode='contain' />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={LoginImg} resizeMode='contain' />
        <Text style={styles.logoText}>Enter OTP</Text>
        <Text
          style={{
            fontSize: 14,
            textAlign: "center",
            width: 341,
            marginTop: 20,
          }}
        >
          An 4 digit code has been sent to
        </Text>
        <Text style={{ fontSize: 14, textAlign: "center", width: 341 }}>
          +1 937-492-0898
        </Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={{ fontSize: 12, width: 341, marginBottom: 20 }}>
          Not receiving any codes? Resend.
        </Text>
        <OTPInput code={pin} setCode={setPin} submitfunc={() => null} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => console.log("helo")}
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
    paddingTop: '20%',
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
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
    color: "#1D1C1A",
    marginBottom: 20,
  },
});

export default Otp;
