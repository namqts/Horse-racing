import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { dummyData } from "../../../constants";

export default function News() {
  const [notifs, setNotifs] = useState();

  const setRead = (eid) => {
    setNotifs(notifs);
  };

  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        {dummyData.noti.map((e) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("BettingNew", { data: e })}
          >
            <View style={styles.notiCard}>
              <View style={styles.containerTxt}>
                <Text style={styles.title}>{e.title}</Text>
                <Text style={styles.time}>2020-02-29</Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "rgb(85, 91, 97)",
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  time: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: "#FFFFFF",
  },
  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: "#00CDEC",
  },
  containerTxt: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: 32,
    paddingRight: 32,
    width: 428,
    height: 72,
  },
  notiCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: (12, 0, 0),
    width: 428,
    height: 96,
    backgroundColor: "#04234B",
    marginTop: 1,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    width: 428,
    // height: 821,
    marginTop: 19,
  },
});
