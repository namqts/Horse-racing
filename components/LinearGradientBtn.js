import React from "react";
import LinearGradient from "react-native-linear-gradient";

export default function LinearGradientBtn({ children, style, color, local, angle }) {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.0 }}
      estart={{ x: 0.0, y: 0.0 }}
      end={{ x: 0.0, y: 1.0 }}
      useAngle={true}
      angle={angle}
      locations={local}
      angleCenter={{ x: 0.5, y: 0.5 }}
      colors={color}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}
