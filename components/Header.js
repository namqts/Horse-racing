import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { icons, images, windowHeight, windowWidth } from "../constants";

import Address from "./Address";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import LinearGradientBtn from "./LinearGradientBtn";
import LinearGradientGray from "./LinearGradientGray";

export default function Header() {
  const [data, setData] = useState("middle");
  const [width, setWidth] = useState(170);

  return (
    <LinearGradientBtn
      angle={180}
      local={[0.0, 0.688, 0.7147, 1.0]}
      color={["#373F4F", "#8690A4", "#13161D", "#5D667A"]}
      style={styles.header}
    >
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.0, y: 1.0}}
        useAngle={true}
        angle={180}
        locations={[0.0, 0.1615, 0.7031, 0.7656, 1.0]}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={[
          '#F8F8F8',
          '#B5B4B4',
          '#F1F1F1',
          '#504F4F',
          '#E6E6E6',
        ]}
        style={styles.linear}>
        <View style={styles.viewContainer}>
          <View style={styles.address}>
            <Address data={data} width={width} />
          </View>
        </View>
        <View style={styles.pointSPC}>
          <Image source={icons.coin} />
          <Text
            style={styles.headerText}
            ellipsizeMode={'middle'}
            numberOfLines={1}>
            10,000
          </Text>
        </View>
      </LinearGradient>
      <HeaderRight/>
    </LinearGradientBtn>
  );
}
const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: windowWidth,
    height: windowHeight - 599,
    marginTop: windowWidth - 386,
    marginLeft: -(windowWidth - 343),
  },
  address: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: (4, 8),
    width: 224,
    height: 40,
    backgroundColor: "#0D1E00",
    borderColor: "rgba(223, 230, 233, 0.25)",
    borderWidth: 2,
    elevation: 4,
    shadowColor: "rgba(0, 0, 0, 0.75)",
    borderRadius: 4,
  },
  viewContainer: {
    width: 346,
    height: 52,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 2,
    shadowOpacity: 0.6,
    borderRadius: 8,
    marginLeft: -4,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  linear: {
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    marginLeft: 8,
    marginTop: 8
  },
  headerText: {
    width: 146,
    height: 16,
    fontStyle: "normal",
    fontSize: 14,
    color: "#00CDEC",
    fontWeight: "300",
    display: "flex",
    alignItems: "flex-end",
  },
  pointSPC: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    width: 92,
    height: 40,
    marginLeft: -108,
    marginRight: 4,
    backgroundColor: "#0D1E00",
    borderColor: "rgba(223, 230, 233, 0.25)",
    borderWidth: 2,
    elevation: 4,
    shadowColor: "rgba(0, 0, 0, 0.75)",
    borderRadius: 4,
  },
});
