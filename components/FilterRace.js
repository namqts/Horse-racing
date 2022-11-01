import React, { useRef } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { FONTS, icons, windowHeight, windowWidth } from "../constants";
import { FilterPay } from "../frontend/screens/MyAccount";

export default function FilterRace() {
  const refRBSheet = useRef();
  return (
    <View style={styles.layoutContainer}>
      <View style={styles.container}>
        <View style={styles.label}>
          <View style={styles.txtLabel}>
            <Text
              style={[
                FONTS.barTitle,
                { fontWeight: "500", alignItems: "flex-end", color: "#FFFFFF", width: windowWidth - 108 },
              ]}
            >
              Filter
            </Text>
            <Image source={icons.clear}/>
          </View>
        </View>
        <FilterPay />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtLabel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 0,
    width: windowWidth - 32,
    height: 42,
    marginBottom: 16,
  },
  label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    width: windowWidth - 32,
    height: 42,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    width: windowWidth - 32,
    height: 392,
  },
  layoutContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: (0, 16),
    width: windowWidth,
    height: windowHeight / 2,
  },
});
