import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Tokyo,
  ClassRace,
  LinearGradientSilver,
  LinearGradientBtn,
} from "../../../components";
import { COLORS, dummyData, images } from "../../../constants";
// import CountDown from 'react-native-countdown-component';

export default function RaceList() {
  const navigation = useNavigation();

  return (
    <View>
      {dummyData.races.map((race) => (
        <LinearGradientBtn
          angle={180}
          local={[0.0, 0.001, 0.4635, 0.5104, 1.0]}
          color={[
            COLORS.grey,
            COLORS.grey,
            COLORS.grey,
            COLORS.ral,
            COLORS.grey,
          ]}
          style={styles.containerRace}
        >
          <LinearGradient
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 0.0, y: 1.0 }}
            useAngle={true}
            angle={90}
            locations={race.location}
            colors={race.color}
            style={styles.numberRace}
          >
            <Text style={styles.txtNumber}>{race.id} RACE</Text>
            <View
              style={{
                width: 0,
                height: 0,
                borderStyle: "solid",
                borderLeftWidth: 0,
                borderRightWidth: 20,
                borderBottomWidth: 26,
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
                borderBottomColor: race.colorRace,
                display: "flex",
                marginLeft: 10,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                display: "flex",
                width: 80,
                marginLeft: 10,
              }}
            >
              <Text style={styles.text}>Take bets</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                display: "flex",
                width: 191,
              }}
            >
              <ImageBackground source={race.yard} style={styles.yard}>
                <Text style={[styles.text, { fontSize: 12, lineHeight: 12 }]}>
                  {race.m}
                </Text>
              </ImageBackground>
              <LinearGradientSilver style={styles.time}>
                <ImageBackground source={images.countdown} style={styles.count}>
                  {/* <CountDown
                    size={7}
                    until={16}
                    digitTxtStyle={styles.timeStyle}
                    digitStyle={{backgroundColor: 'transparent', height: 25}}
                    separatorStyle={styles.timeStyle}
                    timeToShow={['H', 'M', 'S']}
                    timeLabels={{h: null, m: null, s: null}}
                    showSeparator
                  /> */}
                </ImageBackground>
              </LinearGradientSilver>
            </View>
          </LinearGradient>
          <LinearGradientBtn
            angle={180}
            local={[0.0, 0.1615, 0.3385, 0.474, 0.8542, 1.0]}
            color={[
              COLORS.white2,
              COLORS.gray4,
              COLORS.white3,
              COLORS.gray5,
              COLORS.gray7,
              COLORS.gray6,
            ]}
            style={styles.containerBorder}
          >
            <LinearGradientBtn
              angle={180}
              local={[0.0, 0.8787, 0.9054, 1.0]}
              color={[
                COLORS.grayBlue,
                COLORS.grayGreen,
                COLORS.grayBlueDark,
                COLORS.grayBluelight,
              ]}
              style={styles.containerHorse}
            >
              <View
                // source={require('../Image/gif/led.gif')}
                style={styles.containerHorse}
              >
                <View style={styles.name}>
                  <View style={styles.raceName}>
                    <View style={styles.raceCorse}>
                      <Tokyo />
                    </View>
                    <Text style={[styles.text, { marginLeft: 8 }]}>
                      Karitekisuto race
                    </Text>
                  </View>
                  <ClassRace />
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("RaceDetail")}
                >
                  <View style={styles.btn}>
                    <Image source={images.button} />
                  </View>
                </TouchableOpacity>
              </View>
            </LinearGradientBtn>
          </LinearGradientBtn>
        </LinearGradientBtn>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  timeStyle: {
    color: "#FFFFFF",
    fontFamily: "timer",
    fontWeight: "600",
    fontSize: 13,
    lineHeight: 14,
    fontStyle: "normal",
    letterSpacing: 0.02,
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    width: 78,
    height: 50,
    marginBottom: 12,
  },
  raceCorse: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 0,
    width: 49,
    height: 24,
    borderRadius: 4,
  },
  raceName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8,
    width: 200,
    height: 24,
  },
  name: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 0,
    width: 258,
    height: 92,
    marginBottom: 10,
  },
  txtBetting: {
    width: 60,
    height: 28,
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 14,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    elevation: 4,
    textAlign: "center",
  },
  betting: {
    alignItems: "center",
    padding: (4, 0),
    width: 82,
    height: 36,
    justifyContent: "center",
    flexDirection: "column",
    display: "flex",
    borderColor: "#825D24",
    borderWidth: 0.5,
    borderRadius: 7,
    marginLeft: 20,
    elevation: 4,
    shadowColor: "rgba(0, 0, 0, 0.16)",
  },
  raceTxt: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    width: 178,
    height: 24,
    color: "#FFFFFF",
    alignItems: "center",
    textAlign: "center",
  },
  containerHorse: {
    width: 376,
    height: 120,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 4,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
  },
  containerBorder: {
    width: 378,
    height: 122,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  count: {
    width: 70,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    width: 72,
    height: 24,
    padding: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  yard: {
    width: 62,
    height: 24,
    marginLeft: 13.5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: "#FFFFFF",
  },
  txtNumber: {
    fontFamily: "Inter",
    fontStyle: "italic",
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: -0.25,
    fontWeight: "bold",
    marginLeft: 6,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { height: 1, width: 1 },
    textShadowRadius: 4,
    width: 60,
  },
  numberRace: {
    width: 80,
    height: 26,
    alignItems: "flex-start",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: "row",
    display: "flex",
  },
  containerRace: {
    marginTop: 2,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 40,
    width: 376,
    height: 120,
    flexDirection: "column",
    display: "flex",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 0.5,
    borderColor: "rgba(19, 0, 0, 0.25)",
  },
});
