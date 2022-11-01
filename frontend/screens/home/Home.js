import React, { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import RaceList from "./Race";
import { LinearGradientBlur, LinearGradientSilver } from "../../../components";
import Live2D from "./Live2D";
import { COLORS, FONTS, icons, images, windowHeight, windowWidth } from "../../../constants";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [bg2D, setBg2D] = useState(true);

  return (
    <SafeAreaView style={[StyleSheet.absoluteFill, styles.container]}>
      <StatusBar translucent backgroundColor={COLORS.silver} />
      <ScrollView>
        <LinearGradientSilver style={styles.border}>
          <View style={styles.viewContainer}>
            {isOpen ? (
              <ImageBackground style={styles.live} source={images.live} />
            ) : (
              <ImageBackground
                source={bg2D ? images.grass : images.soil}
                style={styles.container2D}
              >
                <TouchableOpacity onPress={() => setBg2D(!bg2D)}>
                  <Live2D />
                </TouchableOpacity>
              </ImageBackground>
            )}
            <View style={styles.containerButton}>
              <LinearGradientBlur
                style={[
                  styles.buttonLive,
                  isOpen
                    ? { width: windowWidth - 381, height: windowHeight - 664 }
                    : { width: windowWidth - 390, height: windowHeight - 664 },
                ]}
              >
                {isOpen ? (
                  <Text style={[FONTS.body6, { width: windowWidth - 390, height: windowHeight - 668 }]}>
                    LIVE
                  </Text>
                ) : (
                  <Text
                    style={[
                      FONTS.body6,
                      { width: windowWidth - 390, height: windowHeight - 668, marginLeft: -(windowWidth - 407) },
                    ]}
                  >
                    2D
                  </Text>
                )}
              </LinearGradientBlur>
              <View style={styles.containerButtonLive}>
                <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                  <View style={[styles.button2D, { marginBottom: 8 }]}>
                    {isOpen ? (
                      <Text style={styles.txt2D}>2D</Text>
                    ) : (
                      <Text style={styles.txt2DLive}>Live</Text>
                    )}
                  </View>
                </TouchableOpacity>
                <View style={styles.button2D}>
                  <Image
                    source={icons.screenMorr}
                    style={{ width: 20, height: 20 }}
                    tintColor={COLORS.white}
                  />
                </View>
              </View>
            </View>
          </View>
        </LinearGradientSilver>
        <View style={styles.textRun}>
          <Image source={images.noti} />
        </View>
        <RaceList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container2D: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 8,
    width: windowWidth - 2,
    height: windowHeight - 468,
    borderRadius: 5,
    overflow: "hidden",
  },
  txt2DLive: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: "#FFFFFF",
    width: windowWidth - 383,
    height: windowHeight - 658,
    textAlign: "center",
  },
  txt2D: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: "#FFFFFF",
    width: windowWidth - 392,
    height: windowHeight - 658,
    textAlign: "center",
  },
  button2D: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    width: windowWidth - 372,
    height: windowHeight - 642,
    backgroundColor: COLORS.transparentBlack,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.transparentBlack,
    borderRadius: 100,
  },
  containerButtonLive: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    width: windowWidth - 372,
    height: windowHeight - 594,
  },
  buttonLive: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: 4,
    paddingTop: 2,
    borderRadius: 3,
  },
  containerButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 0,
    width: windowWidth - 370,
    height: windowHeight - 480,
    zIndex: 1,
    marginTop: -(windowHeight - 474),
    marginLeft: windowWidth - 52,
  },
  textRun: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    width: windowWidth,
    height: windowHeight - 628,
    backgroundColor: "#000",
    shadowColor: "#000000",
    shadowRadius: (0, 1, 4),
  },
  live: {
    width: windowWidth - 2,
    height: windowHeight - 467,
    marginTop: -1,
    resizeMode: "stretch",
    overflow: "hidden",
    borderRadius: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#000',
    marginTop: StatusBar.currentHeight + 1 || 0,
  },

  viewContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: windowWidth,
    height: windowHeight - 708,
    borderRadius: 5,
  },

  border: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0.5,
    width: windowWidth,
    height: windowHeight - 466,
    paddingTop: 2,
    borderRadius: 4,
  },
});
