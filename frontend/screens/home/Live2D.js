import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { LinearTextGradient } from "react-native-text-gradient";
import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  windowWidth,
} from "../../../constants";

import { Easing } from "react-native";
import { Animated } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native";

const Racing2D = [
  {
    id: 1,
    no: images.no1,
    noList: null,
    horse: images.history1,
    color: [
      "#ffcb00",
      "#fd6f01",
      "#ffa02b",
      "#ffe47d",
      "#ffa02b",
      "#fd6f01",
      "#ffcb00",
    ],
    name: "Barnsley",
    stt: "#1",
    colorHorse: "#DA3217",
    keyframe: [
      {
        inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        outRace: [0, 30, 10, 30, 40, 50, 40, 60, 80, 170, 170],
      },
    ],
  },
  {
    id: 2,
    no: images.no2,
    noList: null,
    horse: images.history2,
    color: [
      "#dbdbdb",
      "#636363",
      "#8b8989",
      "#c9c9c9",
      "#8b8989",
      "#636363",
      "#dbdbdb",
    ],
    name: "Stranraer",
    stt: "#2",
    colorHorse: "#241917",
    keyframe: [
      {
        inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        outRace: [0, 10, 30, 20, 40, 10, 60, 80, 50, 80, 170],
      },
    ],
  },
  {
    id: 3,
    no: images.no3,
    noList: null,
    horse: images.history3,
    color: [
      "#ca8453",
      "#84441f",
      "#d15e1c",
      "#f69258",
      "#d15e1c",
      "#84441f",
      "#ca8453",
    ],
    name: "Stranraer",
    stt: "#3",
    colorHorse: "#81262B",
    keyframe: [
      {
        inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        outRace: [0, 10, 30, 40, 40, 10, 60, 80, 170, 170, 170],
      },
    ],
  },
  {
    id: 4,
    no: null,
    noList: "4th",
    horse: images.history4,
    color: [
      "#525967",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#585F6C",
    ],
    name: "Stranraer",
    stt: "#4",
    colorHorse: "#60AFDA",
    keyframe: [
      {
        inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        outRace: [0, 10, 50, 40, 40, 10, 60, 80, 100, 170, 170],
      },
    ],
  },
  {
    id: 5,
    no: null,
    noList: "5th",
    horse: images.history5,
    color: [
      "#525967",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#585F6C",
    ],
    name: "Derby",
    stt: "#5",
    colorHorse: "#F0B81B",
    keyframe: [
      {
        inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        outRace: [0, 10, 50, 40, 40, 10, 60, 80, 120, 140, 170],
      },
    ],
  },
  {
    id: 6,
    no: null,
    noList: "6th",
    horse: images.history6,
    color: [
      "#525967",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#585F6C",
    ],
    name: "Aston Villa",
    stt: "#6",
    colorHorse: "#126FB5",
    keyframe: [
      {
        inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        outRace: [0, 10, 50, 40, 40, 10, 60, 80, 120, 140, 170],
      },
    ],
  },
  {
    id: 7,
    no: null,
    noList: "7th",
    horse: images.history7,
    color: [
      "#525967",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#585F6C",
    ],
    name: "Platanias",
    stt: "#7",
    colorHorse: "#F1B9A8",
    keyframe: [
      {
        inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        outRace: [0, 10, 50, 40, 40, 10, 60, 40, 80, 140, 170],
      },
    ],
  },
  {
    id: 8,
    no: null,
    noList: "8th",
    horse: images.history8,
    color: [
      "#525967",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#585F6C",
    ],
    name: "Bury",
    stt: "#8",
    colorHorse: "#631E7B",
    keyframe: [
      {
        inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        outRace: [0, 10, 50, 40, 80, 50, 100, 160, 140, 140, 170],
      },
    ],
  },
  {
    id: 9,
    no: null,
    noList: "9th",
    horse: images.history9,
    color: [
      "#525967",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#585F6C",
    ],
    name: "Bordeaux",
    stt: "#9",
    colorHorse: "#093E8C",
    keyframe: [
      {
        inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        outRace: [0, 10, 50, 40, 40, 10, 60, 80, 120, 140, 170],
      },
    ],
  },
  {
    id: 10,
    no: null,
    noList: "10th",
    horse: images.history10,
    color: [
      "#525967",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#585F6C",
    ],
    name: "Accrington",
    stt: "#10",
    colorHorse: "#198472",
    keyframe: [
      {
        inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        outRace: [0, 10, 50, 40, 40, 10, 60, 80, 120, 140, 170],
      },
    ],
  },
  {
    id: 11,
    no: null,
    noList: "11th",
    horse: images.history11,
    color: [
      "#525967",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#585F6C",
    ],
    name: "Northampton",
    stt: "#11",
    colorHorse: "#2B853D",
    keyframe: [
      {
        inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        outRace: [0, 10, 50, 40, 40, 10, 60, 80, 120, 140, 170],
      },
    ],
  },
  {
    id: 12,
    no: null,
    noList: "12th",
    horse: images.history12,
    color: [
      "#525967",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#AAAEB6",
      "#585F6C",
    ],
    name: "Fleetwood",
    stt: "#12",
    colorHorse: "#202B61",
    keyframe: [
      {
        inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        outRace: [0, 10, 50, 40, 40, 10, 60, 80, 120, 140, 170],
      },
    ],
  },
];

const road = [
  {
    m: '1800m',
    inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    outRace: [-20, -20, -20, -20, 0, 20, 40, 60, 80, 80, 80],
  },
  {
    m: '1600m',
    inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    outRace: [-20, 0, 20, 40, 60, 80, 100, 120, 140, 140, 140],
  },
  {
    m: '1200m',
    inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    outRace: [0, 60, 80, 100, 120, 140, 160, 180, 240, 240, 240],
  },
  {
    m: '800m',
    inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    outRace: [60, 120, 140, 160, 180, 200, 240, 240, 240, 240, 240],
  },
  {
    m: '400m',
    inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    outRace: [120, 180, 200, 240, 240, 240, 240, 240, 240, 240, 240],
  },
  {
    m: '0m',
    inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    outRace: [180, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240],
  },
];

const finish = [
  {
    inRace: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    outRace: [-60, -60, -60, -60, -60, -60, -60, -20, -10, 0, 0],
  },
];

export default function Live2D() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 60000,
    }).start();
  }, [animatedValue]);

  const movingMargin = (inRace, outRace) =>
    animatedValue.interpolate({
      inputRange: inRace,
      outputRange: outRace,
    });

  return (
    <View style={styles.container}>
        <View style={[styles.containerDivider]}>
          <View style={styles.horseNo}>
            <View style={styles.label}>
              <Text style={styles.OBTClass}>OBT Class1 T 3200</Text>
              <Text style={styles.roomClass}>Tokyo.Class1.TURF.3200m</Text>
            </View>
            {Racing2D.map(e => (
            <View style={styles.containerRace}>
              {e.no == null ? (
                e.noList == null ? null : (
                  <View style={styles.no}>
                    <View
                      style={[
                        styles.noList,
                        e.id < 10
                          ? {width: 18, height: 12}
                          : {width: 22, height: 12},
                      ]}>
                      <LinearTextGradient
                        start={{x: 0.0, y: 0.0}}
                        end={{x: 0.0, y: 1.0}}
                        useAngle={true}
                        angle={270}
                        locations={[0.0, 0.07, 0.34, 0.5, 0.66, 0.93, 1.0]}
                        colors={e.color}
                        style={[
                          styles.roomClass,
                          e.id < 10
                            ? {
                                width: 14,
                                height: 12,
                              }
                            : {
                                width: 18,
                                height: 12,
                              },
                        ]}>
                        <Text>{e.noList}</Text>
                      </LinearTextGradient>
                    </View>
                  </View>
                )
              ) : (
                <View style={styles.no}>
                  <Image source={e.no} />
                </View>
              )}
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                useAngle={true}
                angle={270}
                locations={[0.0, 0.7604]}
                colors={['rgba(20, 20, 20, 0)', '#1B1B1B']}
                style={styles.content}>
                <Image source={e.horse} style={{width: 13, height: 13}} />
                <LinearTextGradient
                  start={{x: 0.0, y: 0.0}}
                  end={{x: 0.0, y: 1.0}}
                  useAngle={true}
                  angle={270}
                  locations={[0.0, 0.07, 0.34, 0.5, 0.66, 0.93, 1.0]}
                  colors={e.color}
                  style={[
                    styles.roomClass,
                    {
                      width: 52,
                      height: 12,
                      marginLeft: 4,
                    },
                  ]}>
                  <Text>{e.name}</Text>
                </LinearTextGradient>
                <Text style={styles.noHorse}>{e.stt}</Text>
              </LinearGradient>
            </View>
          ))}
          </View>
          <View style={[styles.dividerHorse, { flex: -1 }]}>
            {finish.map((e) => (
              <View
                style={{
                  flexDirection: "column",
                  width: 239,
                  height: 1,
                }}
              >
                <Animated.View
                  style={[
                    {
                      // Bind opacity to animated value

                      marginTop: movingMargin(e.inRace, e.outRace),
                    },
                  ]}
                >
                  <View style={styles.finish}>
                    <Image
                      source={images.finish}
                      style={{ width: 239, height: 10 }}
                    />
                    <Text
                      style={[
                        styles.noHorse,
                        { color: "#FFFFFF", marginLeft: 8 },
                      ]}
                    >
                      Finish
                    </Text>
                  </View>
                </Animated.View>
              </View>
            ))}
          </View>
          <View style={[styles.dividerHorse, { flex: -1 }]}>
            {road.map((e) => (
              <View
                style={{
                  flexDirection: "column",
                  width: 239,
                  height: 1,
                }}
              >
                <Animated.View
                  style={[
                    {
                      // Bind opacity to animated value
                      flexDirection: "row",
                      marginTop: movingMargin(e.inRace, e.outRace),
                    },
                  ]}
                >
                  <View
                    style={{
                      width: 239,
                      height: 1,

                      backgroundColor: COLORS.transparentBlack,
                    }}
                  ></View>
                  <Text
                      style={[
                        styles.noHorse,
                        { color: "#FFFFFF", marginTop: -6, fontSize: 8 },
                      ]}
                    >
                      {e.m}
                    </Text>
                </Animated.View>
              </View>
            ))}
          </View>
          <View style={styles.dividerHorse}>
            <View style={styles.containerHorse}>
              {Racing2D.map((e) =>
                e.keyframe.map((race) => (
                  <View style={styles.horseColumn}>
                    <Animated.View
                      style={[
                        {
                          // Bind opacity to animated value
                          marginBottom: movingMargin(race.inRace, race.outRace),
                        },
                      ]}
                    >
                      <View style={styles.horseType}>
                        {
                          // Array().fill(
                          //   Racing2D.map((e) =>
                          //     e.keyframe.map((race) => {
                          //       for (var i = 0; i < 12; i++) {
                          //         race.outRace[i + 1] - race.outRace[i] >= 30
                          //           ? // <View style={styles.toolTip}>
                          //             //   <Image source={icons.skill} />
                          //             // </View>
                          //             console.log("a", race.outRace[i + 1] - race.outRace[i])
                          //           : // <View style={styles.toolTip}>
                          //             //   <Image source={icons.skill} />
                          //             // </View>
                          //             console.log("b", race.outRace[i + 1] - race.outRace[i]);
                          //       }
                          //     })
                          //   )
                          // )
                          Racing2D.map((e) =>
                            e.keyframe.map((race) => {
                              for (var i = 0; i < 12; i++) {
                                race.outRace[i + 1] - race.outRace[i] >= 30 ? (
                                  <View style={styles.toolTip}>
                                    <Image source={icons.skill} />
                                  </View>
                                ) : (
                                  // console.log(
                                  //   "a",
                                  //   race.outRace[i + 1] - race.outRace[i]
                                  // )
                                  <View style={styles.toolTip}>
                                    <Image source={icons.skill} />
                                  </View>
                                );
                                // console.log(
                                //   "b",
                                //   race.outRace[i + 1] - race.outRace[i]
                                // );
                              }
                            })
                          )
                        }

                        <View
                          style={[
                            styles.horse2D,
                            { backgroundColor: e.colorHorse },
                          ]}
                        >
                          <Text style={styles.txtHorse}>{e.id}</Text>
                        </View>
                      </View>
                    </Animated.View>
                  </View>
                ))
              )}
              {/* <TextRace/> */}
            </View>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  toolTip: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    width: 16,
    height: 16,
    left: 6,
  },
  horseType: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    width: 18,
    height: 18,
  },
  txtHorse: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 8,
    lineHeight: 18,
    letterSpacing: 0.03,
    color: "#FFFFFF",
    width: 10,
    height: 18,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  horse2D: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    width: 18,
    height: 18,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(0, 20, 30, 0.75)",
    borderRadius: 100,
  },
  horseColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 0,
    width: 18,
    height: 176,
  },
  containerHorse: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 0,
    width: 238,
    height: 176,
    marginTop: 10,
  },
  finish: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    width: 280,
    height: 12,
  },
  dividerHorse: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    width: 280,
    height: 196,
  },
  noHorse: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.02,
    color: "#E9E9E9",
    width: 20,
    height: 12,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: (0, 4, 0, 0),
    width: 94,
    height: 13,
    marginLeft: 4,
  },
  noList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    backgroundColor: "rgba(0, 20, 30, 0.5)",
    borderRadius: 2,
    borderColor: "#AAAEB6",
    borderWidth: 0.3,
  },
  no: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    width: 22,
    height: 12,
  },
  containerRace: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    width: 120,
    height: 13,
  },
  roomClass: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 8,
    lineHeight: 12,
    letterSpacing: 0.02,
    color: "#FFFFFF",
    width: 106,
    height: 12,
  },
  OBTClass: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.03,
    color: "#FFFFFF",
    width: 119,
    height: 18,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    width: 119,
    height: 28,
    marginBottom: 8,
  },
  horseNo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 0,
    width: 120,
    height: 200,
  },
  containerDivider: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 0,
    width: 400,
    height: 200,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 0,
    width: windowWidth - 12,
    height: 200,
  },
});
