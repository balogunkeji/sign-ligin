import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  useColorScheme,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Account, Req } from "../components";

const Dashboard = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={"red"}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />

      <View style={styles.nav}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <Image
            source={require("../assets/images/first1.png")}
            resizeMode='contain'
            style={{ width: 24, height: 24 }}
          />
          <Text style={{ fontSize: 24, color: "#1D1C1A", fontWeight: "800" }}>
            dompet
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../assets/images/moon.png")}
            resizeMode='contain'
            style={{ width: 28, height: 28 }}
          />
          <Image
            source={require("../assets/images/bell.png")}
            resizeMode='contain'
            style={{ width: 28, height: 28 }}
          />
        </View>
      </View>
      <View style={styles.user}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, color: "#fff", fontWeight: "400" }}>
            Hello, users!
          </Text>
          <Image
            source={require("../assets/images/scan.png")}
            resizeMode='contain'
            style={{ width: 24, height: 24 }}
          />
        </View>
        <View style={styles.money}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 40,
                color: "rgba(255, 255, 255, 0.50)",
                fontWeight: "700",
              }}
            >
              RP
            </Text>
            <Text style={{ fontSize: 40, color: "#fff", fontWeight: "700" }}>
              9.750,00
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              width: 52,
              height: 21,
              backgroundColor: "#fff",
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text>IDR</Text>
            <Image
              source={require("../assets/images/drop.png")}
              resizeMode='contain'
              style={{ width: 10, height: 10 }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 30,
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          {Req.map((item, index) => (
            <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginHorizontal: "auto",
            }}
            key={index}
          >
            <View
              style={{
                alignItems: "center",
                width: 80,
                height: 80,
                borderRadius: 50,
                backgroundColor: "#1D1C1A",
                justifyContent: "center",
                borderWidth: 3,
                borderColor: "#fff",
              }}
            >
              <Image
                source={item.img}
                resizeMode='contain'
                style={{ width: 40, height: 40 }}
              />
            </View>
            <Text
              style={{ fontSize: 16, color: "#1D1C1A", fontWeight: "700" }}
            >
              {item.text}
            </Text>
          </View>
          ))}
          {/* <FlatList
            data={Req}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              
            )}
            keyExtractor={(item) => item.text}
          /> */}
        </View>
      </View>
      <View style={{ marginTop: 80, paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "#1D1C1A", fontSize: 16, fontWeight: "600" }}>
            My Accounts
          </Text>
          <Text style={{ color: "#1D1C1A50", fontSize: 14, fontWeight: "400" }}>
            Show All
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <FlatList
            data={Account}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  marginHorizontal: "auto",
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    width: 63,
                    height: 63,
                    borderRadius: 10,
                    backgroundColor: "#1D1C1A",
                    justifyContent: "center",
                    borderWidth: 3,
                    borderColor: "#fff",
                    marginHorizontal: 20,
                  }}
                >
                  <Image
                    source={item.img}
                    resizeMode='contain'
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <Text
                  style={{ fontSize: 10, color: "#1D1C1A", fontWeight: "600" }}
                >
                  {item.text}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.text}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  nav: {
    paddingTop: "10%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  user: {
    width: Platform.OS === "android" ? "95%" : "90%",
    backgroundColor: "#1D1C1A",
    height: 209,
    borderRadius: 30,
    alignSelf: "center",
    marginVertical: 30,
    padding: 20,
  },
  money: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
    alignItems: "center",
  },
});

export default Dashboard;
