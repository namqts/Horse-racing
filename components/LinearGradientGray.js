import React from "react";
import LinearGradient from "react-native-linear-gradient";

export default function LinearGradientGray({ children, style }) {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.0 }}
      estart={{ x: 0.0, y: 0.0 }}
      end={{ x: 0.0, y: 1.0 }}
      useAngle={true}
      angle={180}
      angleCenter={{ x: 0.5, y: 0.5 }}
      locations={[0.0, 0.1615, 0.3385, 0.474, 0.8542, 1.0]}
      colors={[
        "#F8F8F8",
        "#D0D0D0",
        "#F8F8F8",
        "#A4A4A4",
        "#5F5F5F",
        "#B3B3B3",
      ]}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}
