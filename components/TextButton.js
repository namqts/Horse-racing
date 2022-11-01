import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

import { COLORS, SIZES, FONTS, icons } from "../constants";
import LinearGradientBtn from "./LinearGradientBtn";

const TextButton = ({
  image,
  customContainerStyle,
  customLabelStyle,
  onPress,
  label
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.base,
        ...customContainerStyle,
      }}
    >
      <Text
          style={{
            color: COLORS.white,
            ...FONTS.body1,
            justifyContent: "center",
            ...customLabelStyle,
          }}
        >
          {label}
        </Text>
      <Image source={image} />
    </TouchableOpacity>
  );
};

export default TextButton;
